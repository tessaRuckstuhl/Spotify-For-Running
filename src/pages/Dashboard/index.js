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
        <div className="flex flex-col px-5 justify-evenly items-start">
          <div className="flex flex-col w-2/5 justify-start self-center px-5 h-[calc(100vh-6rem)] box-content">
            <InfoText />
            <CreatePlaylistForm />
          </div>
          <div
            id="playlistPreview"
            className="flex flex-col px-5 w-2/3 self-center h-[calc(100vh-6rem)] space-y-5"
          >
            <div>
              <div className="text-5xl font-londrinaShadow">
                Preview
              </div>
              <div className="text-3xl font-londrinaSolid">
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
