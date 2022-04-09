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
    const res = await SpotifyAPI.performRequest(
      accessToken,
      HTTPMethods.GET,
      `/audio-features?ids=${ids}`
    );
    return res.data.audio_features;
  },
};
