import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
import { useTracks } from '../../contexts/TracksContext';
import assembleNewPlaylist from '../../utils/assembleNewPlaylist';
function ConfigureBtn(props) {
  const { accessToken } = useUserToken();
  const { setTracks, setName } = useTracks();
  const [loading, setLoading] = useState(false);
  const { form } = props;

  useEffect(() => {
    if (loading) {
      configurePlaylist();
    }
  }, [loading]);
  const configurePlaylist = async () => {
    try {
      const tracks = await assembleNewPlaylist(
        accessToken,
        form.selectedPlaylistsIds,
        form.bpm
      );
      setLoading(false);
      setName(form.playlistName);
      setTracks(tracks);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button
      disabled={
        form.selectedPlaylistsIds.length == 0 ||
        !form.playlistName
      }
      loading={loading + ''}
      variant="contained"
      onClick={() => setLoading(true)}
    >
      Configure Playlist
    </Button>
  );
}

export default ConfigureBtn;
