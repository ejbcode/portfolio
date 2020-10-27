import React from 'react';
import styled from 'styled-components';

const UlStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
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
  }
`;

const NavLink = ({ open, setOpen }) => (
  <UlStyle open={open}>
    <li>
      <a href="" onClick={() => setOpen(false)}>
        <span>01.</span> Home
      </a>
    </li>
    <li>
      <a href="#about" onClick={() => setOpen(false)}>
        <span>02.</span> About
      </a>
    </li>
    <li>
      <a href="#projects" onClick={() => setOpen(false)}>
        <span>03.</span>Projects
      </a>
    </li>
    <li>
      <a href="#blog" onClick={() => setOpen(false)}>
        <span>04.</span>Blog
      </a>
    </li>
    <li>
      <a href="#contact" onClick={() => setOpen(false)}>
        <span>05.</span>Contact
      </a>
    </li>
  </UlStyle>
);

export default NavLink;
