import React from 'react';
import { useUserToken } from '../../contexts/UserTokenContext';
function InfoText() {
  const { userName } = useUserToken();
  return (
    <div className="mb-10 text-center">
      <div className="font-londrinaShadow text-3xl sm:text-5xl ">
        Welcome, {userName}!
      </div>
      <div className="text-1xl font-londrinaSolid sm:text-3xl">
        It is good to see you.
        <br />
        Start configuring your playlist for running.
      </div>
    </div>
  );
}

export default InfoText;
