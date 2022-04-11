import { Button } from '@mui/material';
import React from 'react';
import { useToken } from '../../contexts/TokenContext';
import assembleNewPlaylist from '../../utils/assembleNewPlaylist';
import createPlaylistFromUris from '../../utils/createPlaylistFromUris';
function CreateBtn(props) {
  const { accessToken } = useToken();
  const { userId, form } = props;

  const createPlaylist = async () => {
    try {
      // await createPlaylistFromUris(accessToken, uris, userId, form.playlistName);
    } catch (error) {
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
