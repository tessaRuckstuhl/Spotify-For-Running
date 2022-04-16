import React from 'react';
import LoginBtn from '../components/Login/LoginBtn';

function Landing() {
  return (
    <div className="flex justify-center ">
      <div className=" flex w-5/6 flex-col sm:w-1/3">
        <div className="mb-12  font-londrinaSolid text-3xl sm:text-5xl">
          Create your playlist for running.
        </div>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Landing;
