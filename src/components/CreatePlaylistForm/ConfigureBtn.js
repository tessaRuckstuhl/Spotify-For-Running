import React, { useEffect, useState } from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
import { useTracks } from '../../contexts/TracksContext';
import assembleNewPlaylist from '../../utils/assembleNewPlaylist';
import { LoadingButton } from '@mui/lab';
import { useErrorSnack } from '../../contexts/ErrorContext';
function ConfigureBtn(props) {
  const { showSnack } = useErrorSnack();
  const { accessToken } = useUserToken();
  const { setTracks, setName, tracks } = useTracks();
  const [loading, setLoading] = useState(false);
  const { form } = props;

  useEffect(() => {
    if (loading) {
      configurePlaylist();
    }
  }, [loading]);

  useEffect(() => {
    if (tracks.length > 0) {
      setLoading(false);
      document
        .getElementById('playlistPreview')
        .scrollIntoView({
          block: 'end',
          behavior: 'smooth',
        });
    }
  }, [tracks]);

  const configurePlaylist = async () => {
    try {
      const tracks = await assembleNewPlaylist(
        accessToken,
        form.selectedPlaylists,
        form.bpm
      );
      if (tracks.length == 0) {
        setLoading(false);
        showSnack(
          'No tracks match your configurations. Try reconfiguring.'
        );
      }
      setName(form.playlistName);
      setTracks(tracks);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LoadingButton
      disabled={
        form.selectedPlaylists.length == 0 ||
        !form.playlistName
      }
      color="secondary"
      size="large"
      loading={loading}
      loadingIndicator="Configuring..."
      variant="contained"
      onClick={() => setLoading(true)}
    >
      Configure Playlist
    </LoadingButton>
  );
}

export default ConfigureBtn;
