import React from 'react';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreateForm';
import CreateBtn from '../../components/Preview/CreateBtn';
import PreviewTable from '../../components/Preview/PreviewTable';
import { UserTokenContextProvider } from '../../contexts/UserTokenContext';
import { TracksContextProvider } from '../../contexts/TracksContext';
import InfoText from '../../components/CreatePlaylistForm/InfoText';

function Dashboard() {
  return (
    <UserTokenContextProvider>
      <TracksContextProvider>
        <div className="flex flex-col items-start justify-evenly px-5">
          <div className="box-content flex h-[calc(100vh-6rem)] w-5/6 flex-col justify-start self-center sm:w-2/5 sm:px-5 ">
            <InfoText />
            <CreatePlaylistForm />
          </div>
          <div
            id="playlistPreview"
            className="mb-5 box-content flex h-[calc(100vh-6rem)] w-5/6 flex-col space-y-5 self-center px-5 sm:w-2/3"
          >
            <div>
              <div className="font-londrinaShadow text-3xl sm:text-5xl">
                Preview
              </div>
              <div className="text-1xl font-londrinaSolid sm:text-3xl">
                Happy with the result? Save it to your
                spotify now.
              </div>
            </div>
            <PreviewTable />
            <CreateBtn />
          </div>
        </div>
      </TracksContextProvider>
    </UserTokenContextProvider>
  );
}
export default Dashboard;
