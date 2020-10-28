import React from 'react';
import Navbar from './NavBar';

const Header = ({ siteTitle }) => (
  <header id="home">
    <Navbar siteTitle={siteTitle} />
  </header>
);

export default Header;
