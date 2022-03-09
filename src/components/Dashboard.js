import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { getHashParams } from '../utils/tools';

function Dashboard(props) {
  const [profile, setProfile] = useState({});

  const fetchPlaylists = async () => {
    if (window.location.hash) {
      const params = getHashParams();
      var options = {
        headers: { Authorization: 'Bearer ' + params.access_token },
        json: true,
      };
      try {
        const res = await axios.get(
          'https://api.spotify.com/v1/me/playlists',
          options
        );
        setProfile(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {' '}
      <h1>Dashboard</h1>
      <Button variant="outlined" onClick={fetchPlaylists}>
        Me
      </Button>
      <div>{JSON.stringify(profile)}</div>
    </>
  );
}
export default Dashboard;
