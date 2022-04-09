import axios from 'axios';
import { Button } from '@mui/material';
import React from 'react';
import PlaylistService from '../../services/PlaylistService';
import { useToken } from '../../contexts/TokenContext';
import assembleNewPlaylist from '../../utils/assembleNewPlaylist';
import createPlaylistFromUris from '../../utils/createPlaylistFromUris';
function CreateBtn(props) {
  const { accessToken } = useToken();
  const { userId, form } = props;

  const createPlaylist = async () => {
    try {
      const uris = await assembleNewPlaylist(
        accessToken,
        form.selectedPlaylistsIds,
        form.bpm
      );
      await createPlaylistFromUris(accessToken, uris, userId, form.playlistName);
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
