import { Button } from '@mui/material';
import React from 'react';
import { useToken } from '../../contexts/TokenContext';
import { useTracks } from '../../contexts/TracksContext';
import assembleNewPlaylist from '../../utils/assembleNewPlaylist';
import createPlaylistFromUris from '../../utils/createPlaylistFromUris';
function ConfigureBtn(props) {
  const { accessToken } = useToken();
  const {setTracks} = useTracks()
  const { userId, form } = props;

  const createPlaylist = async () => {
    try {
      const tracks = await assembleNewPlaylist(
        accessToken,
        form.selectedPlaylistsIds,
        form.bpm
      );
      setTracks(tracks)
      // await createPlaylistFromUris(accessToken, uris, userId, form.playlistName);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  return (
    <Button variant="contained" onClick={createPlaylist}>
      Configure Playlist
    </Button>
  );
}

export default ConfigureBtn;
