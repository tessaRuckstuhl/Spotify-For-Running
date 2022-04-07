import API from '../utils/api';

export default {
  getPlaylists: async (accessToken, userId) => {
    const res = await API.performRequest(
      accessToken,
      'get',
      `https://api.spotify.com/v1/users/${userId}/playlists`
    );
    return res.data.items;
  },
  getPlaylistItems: async (accessToken, playlistId) => {
    const res = await API.performRequest(
      accessToken,
      'get',
      `https://api.spotify.com/playlists/${playlistId}/tracks`
    );
    console.log(res.data);
    return res.data.items;
  },
  createPlaylist: async (accessToken, userId, name) => {
    const res = await API.performRequest(
      accessToken,
      'post',
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      { name: name, description: null, public: false }
    );
    return res.data;
  },
  addTracksToPlaylist: async (accessToken, playlistId, uris) => {
    await API.performRequest(
      accessToken,
      'post',
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      uris
    );
  },
};
