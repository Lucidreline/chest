import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header-container'>
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <h1 className='logo'>Chest</h1>
        </Link>
      </div>
      <div className='links-container'>
        <Link className='link' to='/link1'>
          Link 1
        </Link>
        <Link className='link' to='/link3'>
          Link 2
        </Link>
        <Link className='link' to='/link3'>
          Link 3
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
