import { Button } from '@mui/material';
import React from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
import { useTracks } from '../../contexts/TracksContext';
import createPlaylistFromUris from '../../utils/createPlaylistFromUris';
function CreateBtn(props) {
  const { accessToken, userId } = useUserToken();
  const { tracks, name } = useTracks();
  const createPlaylist = async () => {
    try {
      const uris = tracks.map(track => track.uri)
      console.log(uris.length)
      await createPlaylistFromUris(
        accessToken,
        uris,
        userId,
        name
      );
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
