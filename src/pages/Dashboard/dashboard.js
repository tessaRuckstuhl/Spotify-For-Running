import React from 'react';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreateForm';
import { UserTokenContextProvider } from '../../contexts/UserTokenContext';
import { TracksContextProvider } from '../../contexts/TracksContext';
import InfoText from '../../components/CreatePlaylistForm/InfoText';
import Preview from '../../components/Preview/Preview';

function Dashboard() {
  return (
    <UserTokenContextProvider>
      <TracksContextProvider>
        <div className="flex flex-col items-start justify-evenly px-5">
          <div className="box-content flex h-[calc(100vh-6rem)] w-5/6 flex-col justify-start self-center sm:w-2/5 sm:px-5 ">
            <InfoText />
            <CreatePlaylistForm />
          </div>
          <Preview />
        </div>
      </TracksContextProvider>
    </UserTokenContextProvider>
  );
}
export default Dashboard;
