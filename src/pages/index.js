import React from 'react';
import LoginBtn from '../components/Login/LoginBtn';

function Landing() {
  return (
    <div className="flex flex-col items-center ">
      <div className=" flex flex-col w-1/3">
        <div className="text-5xl text-white font-rampart mb-12">
          Create your playlist for running
        </div>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Landing;
