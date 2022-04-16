import React from 'react';
import LoginBtn from '../components/Login/LoginBtn';

function Landing() {
  return (
    <div className="flex justify-center ">
      <div className=" flex w-1/3 flex-col">
        <div className="mb-12  font-londrinaSolid text-5xl">
          Create your playlist for running.
        </div>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Landing;
