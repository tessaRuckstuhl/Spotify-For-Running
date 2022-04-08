import SpotifyAPI from '../utils/useSpotifyApi';

export default {
  getTracksAudioFeatures: async (accessToken, ids) => {
    const res = await SpotifyAPI.performRequest(
      accessToken,
      'get',
      `/audio-features/${ids}`
    );
    return res.data;
  },
};
