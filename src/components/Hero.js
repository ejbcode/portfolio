import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.section`
  border: solid red 1px;
  height: 70vh;
  display: flex;
  align-items: center;
  line-height: 4rem;
`;
const Hero = () => (
  <HeroStyle>
    <div>
      <h1>Hey, I’m Ernesto🤟🏼</h1>
      <h3>I´m a Frontend Developer who like to make stuff for the web</h3>
      <h6> Also takes notes of what I´ve learning. </h6>
    </div>
  </HeroStyle>
);

export default Hero;
