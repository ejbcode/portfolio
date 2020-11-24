import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './NavBar';

const Header = ({ siteTitle }) => (
  <header id="home">
    <Navbar siteTitle={siteTitle} />
  </header>
);

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};
