import React from 'react';
import LoginBtn from '../components/Login/LoginBtn';

function Landing() {
  return (
    <div className="flex justify-center ">
      <div className=" flex w-5/6 flex-col text-center sm:w-1/3">
        <div className="mb-6 font-londrinaShadow text-3xl sm:text-5xl">
          Create your playlist for running.
        </div>
        <div className="text-1xl  mb-12 font-londrinaSolid sm:text-3xl">
          Login to get started.
        </div>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Landing;
