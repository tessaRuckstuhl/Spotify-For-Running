import React from 'react';
function Header() {
  return (
    <div className='flex justify-between h-24'>
      <a href="/">
        <div className="text-xl font-reenie tracking-widest px-8 py-6">
          TJR
        </div>
      </a>
      <a href="/about">
        <div className="text-l font-light font-londrinaSolid px-8 py-6">
          About
        </div>
      </a>
    </div>
  );
}

export default Header;
