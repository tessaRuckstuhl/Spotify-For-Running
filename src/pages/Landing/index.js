import React from 'react';
import LoginBtn from '../../components/LoginBtn';

function Landing(params) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="text-white">Create your playlist for running</div>
        <LoginBtn />
      </div>
      <img src="/img/FinishLine.png" />
    </div>
  );
}

export default Landing;
