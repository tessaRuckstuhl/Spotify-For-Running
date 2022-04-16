import React from 'react';
import LoginBtn from '../components/Login/LoginBtn';

function Landing() {
  return (
    <div className="flex justify-center ">
      <div className=" flex w-5/6 sm:w-1/3 flex-col">
        <div className="mb-12  font-londrinaSolid sm:text-5xl text-3xl">
          Create your playlist for running.
        </div>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Landing;
