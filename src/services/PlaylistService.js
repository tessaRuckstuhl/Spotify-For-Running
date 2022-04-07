import axios from 'axios';

export default {
  getPlaylists: async (accessToken, userId) => {
    var options = {
      headers: { Authorization: 'Bearer ' + accessToken },
      json: true,
    };
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        options
      );
      return res.data.items;
    } catch (error) {
      console.log(error);
    }
  },
};
