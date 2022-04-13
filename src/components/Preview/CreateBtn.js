import { Button, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
import { useTracks } from '../../contexts/TracksContext';
import PlaylistService from '../../services/PlaylistService';
function CreateBtn() {
  const [ snack, setSnack ] = useState({
    open: false,
    message: '',
  });
  const { accessToken, userId } = useUserToken();
  const { tracks, name } = useTracks();
console.log(snack, 'snack')
  const handleClose = () => {
    setSnack({open:false, message:''})
  }
  const createPlaylist = async () => {
    try {
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
      setSnack({
        open: true,
        message: 'Playlist created successfully!',
      });
    } catch (error) {
      console.error(error);
      setSnack({open:true, message:'An error occurred.'});
    }
  };
  return (
    <>
      <Button variant="contained" onClick={createPlaylist}>
        Create Playlist
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'top',
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
