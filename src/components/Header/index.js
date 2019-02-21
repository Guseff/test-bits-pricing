import React from 'react';

import './style.css';

import logo from '../../assets/images/logo.svg'; 

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <img alt='' src={logo} />
    </div>
  </div>
);

export default Header;