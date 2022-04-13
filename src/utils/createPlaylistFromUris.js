import PlaylistService from "../services/PlaylistService";

const createPlaylistFromUris = async (accessToken, uris, userId, playlistName ) => {
      const createdPlaylist = await PlaylistService.createPlaylist(
        accessToken,
        userId,
        playlistName
      );

      await PlaylistService.addTracksToPlaylist(accessToken, createdPlaylist.id, uris);
}
export default createPlaylistFromUris;