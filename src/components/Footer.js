import React from 'react';
import styled from 'styled-components';
import {
  FaLinkedinIn,
  FaTwitter,
  FaRss,
  FaGithub,
  FaMicroblog,
  FaEnvelope,
} from 'react-icons/fa';
import Image from './image';

const FooterStyle = styled.footer`
  margin: 0 auto;
  ul {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 320px;
    font-size: 3rem;
  }
  p {
    text-align: center;
  }
  div {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Footer = () => (
  <FooterStyle>
    <div>
      <Image />
    </div>

    <ul>
      <li>
        <FaGithub />
      </li>
      <li>
        <FaLinkedinIn />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaMicroblog />
      </li>
      <li>
        <FaRss />
      </li>
      <li>
        <FaEnvelope />
      </li>
    </ul>
    <p>Built a Blazing ⚡ fast development with Gatsby</p>
    <p>
      Design & built by <span>Ernesto Briceño</span>
    </p>
  </FooterStyle>
);

export default Footer;
