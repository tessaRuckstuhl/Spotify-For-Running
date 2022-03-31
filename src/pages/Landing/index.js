import React from 'react';
import LoginBtn from '../../components/LoginBtn';

function Landing(params) {
  return (
    <div className="flex flex-row justify-around px-5">
      <div className="flex flex-col justify-around w-1/3">
        <div className="text-4xl text-white font-rampart">
          Create your playlist for running
        </div>
        <LoginBtn />
      </div>
      <img width="50%" src="/img/FinishLine.png" />
    </div>
  );
}

export default Landing;
