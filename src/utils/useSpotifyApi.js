import axios from 'axios';

export default {
  /**
   * Performs axios request to spotify API with required header
   * @param {string} token
   * @param {string} method - 'get' or 'post'
   * @param {methods} url - api endpoint
   * @param {object} data - payload
   * @return Object
   */
  performRequest: async (
    token,
    method,
    url,
    data = null
  ) => {
    const SPOTIFY_API = 'https://api.spotify.com/v1';
    if (token) {
      const options = {
        headers: { Authorization: 'Bearer ' + token },
        json: true,
      };
      try {
        const res = await axios({
          method: method,
          url: `${SPOTIFY_API}${url}`,
          ...options,
          data: data,
        });
        return res;
      } catch (error) {
        console.error('SPOTIFY API ERROR');
        console.error(error);
        throw(error)

      }
    } else {
      throw 'invalid method to perform axios request';
    }
  },
};
