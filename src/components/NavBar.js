import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Burger from './Burger';

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
  }

  a {
    color: var(--colorTxt);
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    font-weight: 700;
  }

  span {
    color: var(--colorTxt2);
  }
`;

const Navbar = ({ siteTitle }) => (
  <Nav>
    <Link to="/">
      <div className="logo">
        {' '}
        <span>&lt; </span>
        ejb<span>code /&gt;</span>
      </div>
    </Link>
    <Burger />
  </Nav>
);

export default Navbar;
