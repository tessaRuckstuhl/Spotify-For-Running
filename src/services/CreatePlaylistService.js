import axios from "axios";

export default {
  createPlaylist: async (accessToken, userId, name) => {
    const options = {
      headers: { Authorization: 'Bearer ' + accessToken },
      json: true,
    };
    try {
      const res = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        { name: name, description: 'Test', public: false },
        options
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  addTracksToPlaylist: async (accessToken, playlistId, uris) => {
    const options = {
        headers: { Authorization: 'Bearer ' + accessToken },
        json: true,
      };
    await axios.post(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      { ...uris },
      options
    );
  },
};
