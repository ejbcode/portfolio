import React from 'react';
import Navbar from './NavBar';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar siteTitle={siteTitle} />
  </header>
);

export default Header;
