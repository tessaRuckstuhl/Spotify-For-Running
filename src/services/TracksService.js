import { HTTPMethods } from '../utils/httpMethods';
import SpotifyAPI from '../utils/useSpotifyApi';

export default {
  /**
   *
   * @param {string} accessToken
   * @param {string} ids - tracks separated by commas
   * @returns tracks
   */
  getTracks: async (accessToken, ids) => {
    const res = await SpotifyAPI.performRequest(
      accessToken,
      HTTPMethods.GET,
      `/tracks/${ids}`
    );
    return res.data;
  },

  /**
   *
   * @param {string} accessToken
   * @param {string} ids - tracks separated by commas
   * @returns {Object} tracks' audio features
   */
  getTracksAudioFeatures: async (accessToken, ids) => {
    const numTracks = ids.split(',');
    const iterations =
      Math.round(numTracks.length / 100) > 0
        ? Math.round(numTracks.length / 100)
        : 1;

    const res = [];
    for (const i of [...Array(iterations).keys()]) {
      const batch = numTracks.slice(i * 100, (i + 1) * 100);
      const partRes = await SpotifyAPI.performRequest(
        accessToken,
        HTTPMethods.GET,
        `/audio-features?ids=${batch.join()}`
      );
      res.push(...partRes.data.audio_features);
    }

    return res;
  },
};
