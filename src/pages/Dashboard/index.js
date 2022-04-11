import React from 'react';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreateForm';
import CreateBtn from '../../components/Preview/CreateBtn';
import PreviewTable from '../../components/Preview/PreviewTable';
import { TokenContextProvider } from '../../contexts/TokenContext';
import { TracksContextProvider } from '../../contexts/TracksContext';

function Dashboard() {
  return (
    <TokenContextProvider>
      <TracksContextProvider>
        <div className="flex flex-row px-5 justify-evenly align-top">
          <div className="flex flex-col w-1/3 justify-center px-5">
            <div className="text-white text-5xl font-rampart mb-10">
              Ready.
              <br /> Set.
              <br /> Go!
            </div>
            <CreatePlaylistForm />
          </div>
          <div className="px-5">
            <div className="text-white text-5xl font-rampart mb-10">
              Preview
            </div>
              <PreviewTable />
              <CreateBtn />
          </div>
        </div>
      </TracksContextProvider>
    </TokenContextProvider>
  );
}
export default Dashboard;
