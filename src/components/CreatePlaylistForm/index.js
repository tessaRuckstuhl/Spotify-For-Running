import { Button, Slider, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SelectMultiplePlaylists from './SelectMultiplePlaylists';

function CreatePlaylistForm(props) {
  console.log(props);
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
      />
      <Slider min={0} max={99} defaultValue={30} />
      <SelectMultiplePlaylists playlists={playlistNames} />
      <Button variant="contained">Create Playlist</Button>
    </div>
  );
}

export default CreatePlaylistForm;
