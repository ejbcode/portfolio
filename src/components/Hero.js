import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.section`
  height: 70vh;
  display: flex;
  align-items: center;
  line-height: 4rem;

  legend {
    font-size: 1.6rem;
    opacity: 35%;
    font-family: 'Caveat', cursive;
  }

  .body {
    margin-left: 2rem;
  }
  .hero-text {
    margin-left: 3rem;
  }

  h1 {
    font-size: clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
  }

  h1 span {
    color: var(--colorTxt2);
  }
`;
const Hero = () => (
  <HeroStyle>
    <div>
      <legend className="html">&#60; html &#62;</legend>

      <legend className="body">&#60; body &#62;</legend>
      <div className="hero-text">
        <h1>
          Hey, I’m<span> Ernesto🤟🏼</span>
        </h1>
        <h3>I´m a Frontend Developer who like to make stuff for the web</h3>
        <h6> Also takes notes of what I´ve learning. </h6>
      </div>
      <legend className="body">&#60; /body &#62;</legend>
      <legend className="html"> &#60; /html &#62;</legend>
    </div>
  </HeroStyle>
);

export default Hero;
