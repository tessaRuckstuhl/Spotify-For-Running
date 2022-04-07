import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreatePlaylistForm from '../../components/CreatePlaylistForm';
import { getHashParams } from '../../utils/tools';

function Dashboard() {

  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    if (window.location.hash) {
      const params = getHashParams();
      if (params.access_token) {
        setAccessToken(params.access_token);
      }
    }
  }, []);

  return (
    <div className="flex flex-row px-5 justify-evenly">
      <div className="flex flex-col w-1/3 justify-center">
        <div className="text-white text-5xl font-rampart mb-10">
          Ready.
          <br /> Set.
          <br /> Go!
        </div>
        <CreatePlaylistForm accessToken={accessToken} />
      </div>
      <img width="40%" src="/img/WorkHard.png" />

      {/* <div className="bg-darkerGray p-5 rounded-xl">
        <div className="text-white text-4xl font-rampart">
          Your Playlist Preview
        </div>
      </div> */}
    </div>
  );
}
export default Dashboard;
