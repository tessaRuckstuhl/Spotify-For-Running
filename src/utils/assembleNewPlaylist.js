import PlaylistService from '../services/PlaylistService';
import TracksService from '../services/TracksService';

/**
 * Creates a new playlist for the user from selected playlists
 * @param {string} accessToken
 * @param {string} playlistIds
 */
/** */
const assembleNewPlaylist = async (accessToken, playlistIds, range) => {
  try {
    let tracks = [];
    // get all tracks for playlist ids
    for (const pId of playlistIds) {
      const playlistItems = await PlaylistService.getPlaylistItems(
        accessToken,
        pId
      );
      tracks.push(...playlistItems);
    }
    // get all audio features for tracks ids
    const trackIds = tracks.map((track) => track.track.id).join();
    const audioFeatures = await TracksService.getTracksAudioFeatures(
      accessToken,
      trackIds
    );

    //return uris in tempo range
    const relevantTracks = audioFeatures
      .filter((track) => track.tempo >= range[0] && track.tempo <= range[1])
      .map((track) => track.uri);
    console.log('relevantTracks', relevantTracks)
    return relevantTracks;
  } catch (error) {
    console.error(error);
  }
};



export default assembleNewPlaylist;
