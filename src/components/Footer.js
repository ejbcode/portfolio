import React from 'react';
import styled from 'styled-components';
import Image from './image';

const FooterStyle = styled.footer`
  margin: 0 auto;

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

    <p>Built a Blazing ⚡ fast development with Gatsby</p>
    <p>
      Design & built by <span>Ernesto Briceño</span>
    </p>
  </FooterStyle>
);

export default Footer;
