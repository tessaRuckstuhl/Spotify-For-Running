import React from 'react';
function Header() {
  return (
    <div className="flex h-24 justify-between">
      <a href="/">
        <div className="px-8 py-6 font-reenie text-xl tracking-widest">
          TJR
        </div>
      </a>
      <a href="/about">
        <div className="text-l px-8 py-6 font-londrinaSolid font-light">
          About
        </div>
      </a>
    </div>
  );
}

export default Header;
