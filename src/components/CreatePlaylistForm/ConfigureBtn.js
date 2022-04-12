import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useToken } from '../../contexts/TokenContext';
import { useTracks } from '../../contexts/TracksContext';
import assembleNewPlaylist from '../../utils/assembleNewPlaylist';
import createPlaylistFromUris from '../../utils/createPlaylistFromUris';
function ConfigureBtn(props) {
  const { accessToken } = useToken();
  const { setTracks } = useTracks();
  const [loading, setLoading] = useState(false);
  const { form } = props;
  console.log(form);

  useEffect(() => {
    if(loading){
      createPlaylist()
    }
  }, [loading])
  const createPlaylist = async () => {
    try {
      const tracks = await assembleNewPlaylist(
        accessToken,
        form.selectedPlaylistsIds,
        form.bpm
      );
      setLoading(false);
      setTracks(tracks);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button
      disabled={
        form.selectedPlaylistsIds.length == 0 || !form.playlistName
      }
      loading={loading}
      variant="contained"
      onClick={() => setLoading(true)}
    >
      Configure Playlist
    </Button>
  );
}

export default ConfigureBtn;
