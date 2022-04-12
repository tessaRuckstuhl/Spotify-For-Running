import PlaylistService from '../services/PlaylistService';
import TracksService from '../services/TracksService';

/**
 * Creates a new playlist for the user from selected playlists
 * @param {string} accessToken
 * @param {string} playlistIds
 * @returns {object}
 */
/** */

const assembleNewPlaylist = async (
  accessToken,
  playlistIds,
  range
) => {
  try {
    let tracks = [];
    // get all tracks for playlist ids
    for (const pId of playlistIds) {
      const playlistItems =
        await PlaylistService.getPlaylistItems(
          accessToken,
          pId
        );
      tracks.push(...playlistItems);
    }
    // get all audio features for tracks ids
    const trackIds = tracks
      .map((track) => track.track.id)
      .join();
    const audioFeatures =
      await TracksService.getTracksAudioFeatures(
        accessToken,
        trackIds
      );

    const tracksFeatures = audioFeatures
      .map((track, idx) => ({ tempo:track.tempo, ...tracks[idx].track }))
      .filter(
        (track) =>
          track.tempo >= range[0] && track.tempo <= range[1]
      );
    console.log('tracksfeatures full',tracksFeatures);

    return tracksFeatures;
  } catch (error) {
    console.error(error);
  }
};

export default assembleNewPlaylist;
