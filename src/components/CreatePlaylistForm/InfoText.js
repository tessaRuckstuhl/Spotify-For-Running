import React from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
function InfoText() {
  const { userName } = useUserToken();
  return (
    <>
      <div className="mb-10 ">
        <div className="sm:text-5xl text-3xl font-londrinaShadow ">
          {' '}
          Welcome, {userName}!
        </div>
        <div className="sm:text-3xl text-1xl font-londrinaSolid">
          It is good to see you.
          <br />
          Start configuring your playlist for running.
        </div>
      </div>
    </>
  );
}

export default InfoText;
