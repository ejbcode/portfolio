import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.section`
  height: calc(100vh - 55px);
  max-height: 850px;
  display: flex;
  align-items: center;
  line-height: 2;
  width: 100%;
  margin: 0 auto;
  /* background: #208379;
  background: linear-gradient(135deg, #208379 20%, #051514 80%); */
  padding-top: 20px;
  padding-bottom: 80px;

  :before {
    background-position: 50%;
    background-size: 750px;
    background-image: url('icon-bg.jpg');
    position: absolute;
    top: 0;
    left: 0;
    height: 400%;
    width: 100%;
    display: block;
    z-index: 0;
    content: '';
    opacity: 0.1;
    pointer-events: none;
  }

  legend {
    font-size: 1.6rem;
    opacity: 35%;
    font-family: 'Caveat', cursive;
  }

  .react {
    color: #6ad3f3;
    background: rgba(0, 0, 0);
    padding: 0px 10px;
    /* line-height: -20rem; */
  }

  .javascript {
    background: #efd81e;
    color: #111;
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
  h3 {
    font-size: 7rem;
    font-size: clamp(3rem, -0.875rem + 8.333vw, 5.5rem);
    line-height: 1.5;
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
        <h3>
          I´m a <span className="react">React</span> Developer who like to make
          stuff for the web
        </h3>
        <h6> Also takes notes of what I´ve learning. </h6>
      </div>
      <legend className="body">&#60; /body &#62;</legend>
      <legend className="html"> &#60; /html &#62;</legend>
    </div>
  </HeroStyle>
);

export default Hero;
