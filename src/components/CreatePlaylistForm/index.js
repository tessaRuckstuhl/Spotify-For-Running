import { Button, Slider, Stack, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SelectMultiplePlaylists from './SelectMultiplePlaylists';

function CreatePlaylistForm(props) {
  const { accessToken } = props;
  const [playlistNames, setPlaylistNames] = useState([]);

  useEffect(() => {
    console.log('AccessToken is ', accessToken);
    if (accessToken) {
      fetchPlaylists(accessToken);
    }
  }, [accessToken]);

  const fetchPlaylists = async (token) => {
    var options = {
      headers: { Authorization: 'Bearer ' + token },
      json: true,
    };
    try {
      const res = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        options
      );
      console.log(res.data.items.map((item) => item.name));
      setPlaylistNames(res.data.items.map((item) => item.name));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <TextField
        id="playlist-name-input"
        label="Name"
        variant="outlined"
        color="primary"
        fullWidth
      />
      <Stack spacing={2} direction="row" sx={{ mb: 1, padding:'20px 0px', margin:0 }} alignItems="center">
        <span className="text-white"> 0 bpm</span>
        <Slider min={0} max={99} defaultValue={30} />
        <span className="text-white">100 bpm</span>
      </Stack>
      <SelectMultiplePlaylists playlists={playlistNames} />
      <Button variant="contained">Create Playlist</Button>
    </div>
  );
}

export default CreatePlaylistForm;
