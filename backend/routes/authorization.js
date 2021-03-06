const querystring = require('query-string');
var request = require('request'); // "Request" library
const express = require('express');
// const { generateRandomString } = require('../../src/utils/tools');
const router = express.Router();

var stateKey = 'spotify_auth_state';

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
function generateRandomString(length) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
  }
  return text;
}

router.get('/login', function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);
  // your application requests authorization
  var scope =
    'user-read-private user-read-email playlist-modify-private playlist-modify-public';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.REDIRECT_URI,
        state: state,
      })
  );
});

router.get('/callback', function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter
  console.log(req.query.state, req.cookies[stateKey]);
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies
    ? req.cookies[stateKey]
    : null;

  if (state === null || state !== storedState) {
    res.redirect(
      'http://localhost:3000/' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(
            process.env.CLIENT_ID +
              ':' +
              process.env.CLIENT_SECRET
          ).toString('base64'),
      },
      json: true,
    };

    request.post(
      authOptions,
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var access_token = body.access_token,
            refresh_token = body.refresh_token;

          var options = {
            url: 'https://api.spotify.com/v1/me',
            headers: {
              Authorization: 'Bearer ' + access_token,
            },
            json: true,
          };

          // use the access token to access the Spotify Web API
          request.get(
            options,
            function (error, response, body) {
              console.log(body);
            }
          );

          // pass the token to the browser to make requests from there
          res.redirect(
            'http://localhost:3000/dashboard#' +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token,
              })
          );
        } else {
          res.redirect(
            'http://localhost:3000' +
              querystring.stringify({
                error: 'invalid_token',
              })
          );
        }
      }
    );
  }
});

router.get('/refresh_token', function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(
          process.env.CLIENT_ID +
            ':' +
            process.env.CLIENT_SECRET
        ).toString('base64'),
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(
    authOptions,
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          access_token: access_token,
        });
      }
    }
  );
});

module.exports = router;
