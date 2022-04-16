import { Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
import { useTracks } from '../../contexts/TracksContext';
import PlaylistService from '../../services/PlaylistService';
import { LoadingButton } from '@mui/lab';
import { useErrorSnack } from '../../contexts/ErrorContext';
function CreateBtn() {
  const { setError } = useErrorSnack();

  const [loading, setLoading] = useState(false);
  const { accessToken, userId } = useUserToken();
  const { tracks, name } = useTracks();

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
      setError('Playlist created successfully!');
    } catch (error) {
      console.error(error);
      setError('An error occurred.');
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
    </>
  );
}

export default CreateBtn;
