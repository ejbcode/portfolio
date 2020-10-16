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
    border: green dashed 2px;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
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
      <span>&lt;</span> 01.Home<span> /&gt;</span>
    </li>
    <li>
      <span>&lt;</span> 02.About<span> /&gt;</span>
    </li>
    <li>
      <span>&lt;</span> 03.Project <span> /&gt;</span>{' '}
    </li>
    <li>
      <span>&lt;</span> 04.Blog <span>/&gt;</span>
    </li>
    <li>
      <span>&lt;</span> 05.Contact <span>/&gt;</span>
    </li>
  </UlStyle>
);

export default NavLink;
