import React from 'react';
import "./Header.css"
import NavIcons from './NavIcons';
function Header() {
  return (
    <header className='header'> 
      <div className="logo">
        <div   className='child-nav'>LOGO</div>
        <div  className='child-nav'>LOGO</div>
        <div  className='child-nav'><NavIcons/></div>
      </div>
   <div>
   <nav  className='nav-links'>
        <b>
        <ul>
          <li>Shop</li>
          <li>Sales</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </b>
      </nav>
   </div>
   <div>
    <div className='header-content'> 
        <h1>DISCOVER OUR CONTENT</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
        Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
    </div>
   </div>
    </header>
  );
}

export default Header;
