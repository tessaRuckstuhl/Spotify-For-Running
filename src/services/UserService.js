import axios from 'axios';
import API from '../utils/api';

export default {
  getCurrentUser: async (accessToken) => {
    const res = await API.performRequest(
      accessToken,
      'get',
      'https://api.spotify.com/v1/me'
    );
    return res.data;
  },
};
