import { Button, Slider, TextField } from '@mui/material';
import React from 'react';
import SelectMultiplePlaylists from './SelectMultiplePlaylists';

function CreatePlaylist(params) {
  return (
    <div>
      <TextField
        id="playlist-name-input"
        label="Name"
        variant="outlined"
        color="primary"
      />
      <Slider min={0} max={99} defaultValue={30} />
      <SelectMultiplePlaylists />
      <Button variant="contained">Create Playlist</Button>
    </div>
  );
}

export default CreatePlaylist;
