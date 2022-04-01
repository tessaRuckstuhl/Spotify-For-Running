import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreatePlaylist from '../../components/forms/CreatePlaylist';
import { getHashParams } from '../../utils/tools';

function Dashboard(props) {
  const [profile, setProfile] = useState({});
  const [accessToken, setAccessToken] = useState(null)
  useEffect(() => {
    if (window.location.hash) {
      const params = getHashParams();
      if(params.access_token){
        setAccessToken(params.access_token)
      }
    }
  }, [])

  useEffect(()=> {
    console.log('AT', accessToken)
    fetchPlaylists()
  }, [accessToken])
  

  const fetchPlaylists = async () => {
      var options = {
        headers: { Authorization: 'Bearer ' + accessToken },
        json: true,
      };
      try {
        const res = await axios.get(
          'https://api.spotify.com/v1/me/playlists',
          options
        );
        setProfile(res.data);
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col">
        <div className="text-white text-4xl font-rampart">
          Ready.
          <br /> Set.
          <br /> Go
        </div>
        <CreatePlaylist />
        {/* form */}
      </div>
      <div className="bg-darkerGray p-5 rounded-xl">
        <div className="text-white text-4xl font-rampart">
          Your Playlist Preview
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
