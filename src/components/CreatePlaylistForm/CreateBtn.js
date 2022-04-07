import axios from 'axios';
import { Button } from '@mui/material';
import React from 'react';
function CreateBtn(props) {
  const { userId, accessToken } = props;

  const createPlaylist = async () => {
    var options = {
      headers: { Authorization: 'Bearer ' + accessToken },
      json: true,
    };
    try {
      const res = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        { name: 'AaTest', description: 'Test', public: false },
        options
      );
      const playlistId = res.data.id;
      // TODO match songs from playlists with bpm...
      const uris = ['spotify:track:1301WleyT98MSxVHPZCA6M']
      await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        { ...uris },
        options
      );
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  return (
    <Button variant="contained" onClick={createPlaylist}>
      Create Playlist
    </Button>
  );
}

export default CreateBtn;
