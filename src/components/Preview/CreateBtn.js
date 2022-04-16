import { Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
import { useTracks } from '../../contexts/TracksContext';
import PlaylistService from '../../services/PlaylistService';
import { LoadingButton } from '@mui/lab';
function CreateBtn() {
  const [snack, setSnack] = useState({
    open: false,
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { accessToken, userId } = useUserToken();
  const { tracks, name } = useTracks();
  const handleClose = () => {
    setSnack({ open: false, message: '' });
  };
  const createPlaylist = async () => {
    try {
      setLoading(true);
      const uris = tracks.map((track) => track.uri);
      const createdPlaylist =
        await PlaylistService.createPlaylist(
          accessToken,
          userId,
          name
        );

      await PlaylistService.addTracksToPlaylist(
        accessToken,
        createdPlaylist.id,
        uris
      );
      setLoading(false);
      setSnack({
        open: true,
        message: 'Playlist created successfully!',
      });
    } catch (error) {
      console.error(error);
      setSnack({
        open: true,
        message: 'An error occurred.',
      });
    }
  };
  return (
    <>
      <LoadingButton
        color="secondary"
        loading={loading}
        loadingIndicator="Creating..."
        disabled={tracks.length == 0}
        variant="contained"
        onClick={createPlaylist}
      >
        Create Playlist in Spotify
      </LoadingButton>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snack.open}
        message={snack.message}
        autoHideDuration={6000}
        onClose={handleClose}
      />
    </>
  );
}

export default CreateBtn;
