import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SocialIcons from './socialIcons';

const UlStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  .aTag {
    font-size: 1.6rem;
  }
  .show {
    display: none;
  }
  span {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 10;
    flex-flow: column nowrap;
    align-items: center;
    font-size: 3rem;
    background-color: #0d2538;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
    .show {
      display: initial;
    }
    .aTag {
      font-size: 2.6rem;
    }
  }
`;

const NavLink = ({ open, setOpen }) => (
  <UlStyle open={open}>
    <li>
      <a className="aTag" href="#home" onClick={() => setOpen(false)}>
        <span>01.</span>Home
      </a>
    </li>
    <li>
      <a className="aTag" href="#about" onClick={() => setOpen(false)}>
        <span>02.</span>About
      </a>
    </li>
    <li>
      <a className="aTag" href="#projects" onClick={() => setOpen(false)}>
        <span>03.</span>Projects
      </a>
    </li>
    <li>
      <a className="aTag" href="#blog" onClick={() => setOpen(false)}>
        <span>04.</span>Blog
      </a>
    </li>
    <li>
      <a className="aTag" href="#contact" onClick={() => setOpen(false)}>
        <span>05.</span>Contact
      </a>
    </li>
    <li>
      <div className="show">
        <SocialIcons />
      </div>
    </li>
  </UlStyle>
);

export default NavLink;

NavLink.propTypes = {
  open: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
};
