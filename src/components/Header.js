import React from 'react';
import logo from './img/logo.png';
import title from './img/title.png'
import './Header.css'

function Header() {
    return (
        <>
          <div className="img-container">
            <img src={logo} alt='Lighthouse Logo' id='logo' />
            <img src={title} alt='The Port Credit Post' id='title'/>
          </div>
        </>
    );
}

export default Header;