import API from '../utils/api';

export default {
  getTracksAudioFeatures: async (accessToken, ids) => {
    const res = await API.performRequest(
      accessToken,
      'get',
      `https://api.spotify.com/v1/v1/audio-features/${ids}`
    );
    return res.data;
  },

  
};
