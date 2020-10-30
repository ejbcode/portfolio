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

  .header-module--cursor--33Aoa {
    display: inline-block;
    margin-left: 0.3rem;
    width: 1rem;
    height: 2rem;
    background: var(--colorTxt2);
    animation: header-cursor 1s infinite;
  }

  @keyframes header-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
const Button = styled.button`
  padding: 8px 16px;
  color: var(--colorTxt);
  background: none;
  outline: none;
  border-radius: 4px;
  border: 1px solid var(--colorTxt2);
  cursor: pointer;
`;

const toggleTheme = () => {
  document.documentElement.classList.toggle('light');
};

const Navbar = ({ siteTitle }) => (
  <Nav>
    <Link to="/">
      <div className="logo">
        <span>&lt; </span>
        ejb<span>code /&gt;</span>
        <span className="header-module--cursor--33Aoa" />
      </div>
    </Link>
    {/* <Button onClick={toggleTheme}>dark</Button> */}

    <Burger />
  </Nav>
);

export default Navbar;
