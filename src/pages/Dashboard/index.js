import React from 'react';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreateForm';
import { TokenContextProvider } from '../../contexts/TokenContext';

function Dashboard() {
  return (
    <div className="flex flex-row px-5 justify-evenly">
      <div className="flex flex-col w-1/3 justify-center">
        <div className="text-white text-5xl font-rampart mb-10">
          Ready.
          <br /> Set.
          <br /> Go!
        </div>
        <TokenContextProvider>
          <CreatePlaylistForm />
        </TokenContextProvider>
      </div>
      <img width="40%" src="/img/WorkHard.png" />
    </div>
  );
}
export default Dashboard;
