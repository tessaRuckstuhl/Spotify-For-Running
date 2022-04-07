import axios from 'axios';
import { Button } from '@mui/material';
import React from 'react';
import CreatePlaylistService from '../../services/CreatePlaylistService';
function CreateBtn(props) {
  const { userId, accessToken } = props;

  const createPlaylist = async () => {
    var options = {
      headers: { Authorization: 'Bearer ' + accessToken },
      json: true,
    };
    try {
      const createdPlaylist = await CreatePlaylistService(
        accessToken,
        userId,
        'My-playlist-name'
      );
      const playlistId = createPlaylist.id;
      // TODO match songs from playlists with bpm...
      const uris = ['spotify:track:1301WleyT98MSxVHPZCA6M'];
      await CreatePlaylistService.addTracksToPlaylist(
        accessToken,
        playlistId,
        uris
      );
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
