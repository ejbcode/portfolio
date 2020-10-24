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
    z-index: 100;
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

const NavLink = ({ open }) => (
  <UlStyle open={open}>
    <li>
      <span>01.</span> Home
    </li>
    <li>
      <span>02.</span> About
    </li>
    <li>
      <span>03. </span> Projects
    </li>
    <li>
      <span>04.</span> 04.Blog
    </li>
    <li>
      <span>05. </span> Contact
    </li>
  </UlStyle>
);

export default NavLink;
