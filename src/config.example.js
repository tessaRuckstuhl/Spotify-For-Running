const authEndpoint =
  'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/dashboard';
const clientId = '...';
const scopes =
  'user-read-private user-read-email playlist-modify-private playlist-modify-public';
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;
