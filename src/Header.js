import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Temple Renovation Fundraiser</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#donate">Donate</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


