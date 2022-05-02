import React from 'react';
function Header() {
  return (
    <div className="flex h-24 justify-between">
      <a href="/">
        <div className="px-8 py-6 font-reenie text-xl tracking-widest">
          TJR
        </div>
      </a>
      <div className="flex text-l py-6 font-londrinaSolid font-light">
        <a href="/about">
          <div>
            About
          </div>
        </a>
        <a href="https://github.com/tessaRuckstuhl/Spotify-For-Running">
          <div className="px-8">
            Code
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
