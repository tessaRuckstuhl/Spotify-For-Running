import React, { useEffect, useState } from 'react';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreateForm';
import CreateBtn from '../../components/Preview/CreateBtn';
import PreviewTable from '../../components/Preview/PreviewTable';
import {
  UserTokenContextProvider,
} from '../../contexts/UserTokenContext';
import { TracksContextProvider } from '../../contexts/TracksContext';

function Dashboard() {
  return (
    <UserTokenContextProvider>
      <TracksContextProvider>
        <div className="flex flex-row px-5 justify-evenly items-start">
          <div className="flex flex-col space-y-5 w-1/3 justify-center px-5">
            <div className="text-white text-5xl font-rampart mb-10">
              Ready.
              <br /> Set.
              <br /> Go!
            </div>
            <CreatePlaylistForm />
          </div>
          <div className="flex flex-col space-y-5 px-5">
            <div className="text-white text-5xl font-rampart mb-10">
              Preview
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
