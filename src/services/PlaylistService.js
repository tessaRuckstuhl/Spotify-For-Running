import { HTTPMethods } from '../utils/httpMethods';
import SpotifyAPI from '../utils/useSpotifyApi';

export default {
  getPlaylists: async (accessToken, userId) => {
    const res = await SpotifyAPI.performRequest(
      accessToken,
      HTTPMethods.GET,
      `/users/${userId}/playlists`
    );
    return res.data.items;
  },
  getPlaylistItems: async (accessToken, playlistId) => {
    const res = await SpotifyAPI.performRequest(
      accessToken,
      HTTPMethods.GET,
      `/playlists/${playlistId}/tracks`
    );
    return res.data.items;
  },
  createPlaylist: async (accessToken, userId, name) => {
    const res = await SpotifyAPI.performRequest(
      accessToken,
      HTTPMethods.POST,
      `/users/${userId}/playlists`,
      { name: name, description: null, public: false }
    );
    return res.data;
  },
  addTracksToPlaylist: async (
    accessToken,
    playlistId,
    uris
  ) => {
    console.log(uris, uris.length);
    const res = await SpotifyAPI.performRequest(
      accessToken,
      HTTPMethods.POST,
      `/playlists/${playlistId}/tracks`,
      { uris: uris }
    );
  },
};
