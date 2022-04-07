import axios from 'axios';

export default {
  getCurrentUser: async (accessToken) => {
    let options = {
      headers: { Authorization: 'Bearer ' + accessToken },
      json: true,
    };
    try {
      const res = await axios.get('https://api.spotify.com/v1/me', options);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
