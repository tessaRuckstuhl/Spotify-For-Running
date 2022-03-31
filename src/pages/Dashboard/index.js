import axios from 'axios';
import React, { useState } from 'react';
import CreatePlaylist from '../../components/forms/CreatePlaylist';
import { getHashParams } from '../../utils/tools';

function Dashboard(props) {
  const [profile, setProfile] = useState({});

  const fetchPlaylists = async () => {
    if (window.location.hash) {
      const params = getHashParams();
      var options = {
        headers: { Authorization: 'Bearer ' + params.access_token },
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
