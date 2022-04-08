import { HTTPMethods } from '../utils/httpMethods';
import SpotifyAPI from '../utils/useSpotifyApi';

export default {
  getCurrentUser: async (accessToken) => {
    const res = await SpotifyAPI.performRequest(accessToken, HTTPMethods.GET, '/me');
    return res.data;
  },
};
