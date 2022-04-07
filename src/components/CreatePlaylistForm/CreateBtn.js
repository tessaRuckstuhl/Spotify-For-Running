import axios from 'axios';
import { Button } from '@mui/material';
import React from 'react';
import PlaylistService from '../../services/PlaylistService';
import { useToken } from '../../contexts/TokenContext';
function CreateBtn(props) {
  const { accessToken } = useToken();
  const { userId, form } = props;

  const createPlaylist = async () => {
    try {
      console.log('FORM', form);
      // create empty playlist
      const createdPlaylist = await PlaylistService.createPlaylist(
        accessToken,
        userId,
        form.playlistName
      );
      const playlistId = createdPlaylist.id;
      // get all tracks from selected playlists
      const selectedTracks = [];
      // get playlist id from form...
      for (let idx = 0; idx < form.selectedPlaylists.length; idx++) {
        const tracks = await PlaylistService.getPlaylistItems(
          accessToken,
          form.selectedPlaylists[idx]
        );
        console.log(tracks);
        // form.selectedPlaylists[idx]
      }
      form.selectedPlaylists.forEach();
      // for each track get tempo
      //create playlist with tracks

      // TODO match songs from playlists with bpm...
      const uris = ['spotify:track:1301WleyT98MSxVHPZCA6M'];
      await PlaylistService.addTracksToPlaylist(accessToken, playlistId, uris);
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
