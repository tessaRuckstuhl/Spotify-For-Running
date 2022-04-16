import React from 'react';
import { useTracks } from '../../contexts/TracksContext';
import CreateBtn from './CreateBtn';
import PreviewTable from './PreviewTable';

function Preview() {
  const { tracks } = useTracks();

  return (
    <>
      {tracks.length > 0 && (
        <div
          id="playlistPreview"
          className="mb-5 box-content flex h-[calc(100vh-6rem)] w-5/6 flex-col space-y-5 self-center px-5 sm:w-2/3"
        >
          <div>
            <div className="font-londrinaShadow text-3xl sm:text-5xl">
              Preview
            </div>
            <div className="text-1xl font-londrinaSolid sm:text-3xl">
              Happy with the result? Save it to your spotify
              now.
            </div>
          </div>
          <PreviewTable />
          <CreateBtn />
        </div>
      )}
    </>
  );
}

export default Preview;
