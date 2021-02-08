import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroStyle = styled.section`
  height: calc(100vh - 55px);
  max-height: 850px;
  display: flex;
  align-items: center;
  line-height: 2;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 80px;
  /* */
  :before {
    background-position: 50%;

    background-image: linear-gradient(
        179deg,
        rgba(18, 18, 18, 0) 4%,
        rgba(18, 18, 18, 0.03) 57%,
        rgba(18, 18, 18) 100%
      ),
      url(${props => props.bg});
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
    z-index: -10;
    content: '';
    opacity: 0.2;
    pointer-events: none;
  }
  legend {
    font-size: 1.6rem;
    opacity: 55%;
    font-family: 'Caveat', cursive;
  }

  .react {
    color: #6ad3f3;
    background: rgba(0, 0, 0);
    padding: 0px 15px 0 25px;
  }

  .javascript {
    background: #efd81e;
    color: #111;
    padding: 0px 15px;
    position: relative;
    z-index: 1;
    &:after {
      position: absolute;
      z-index: -1;
      content: '';
      right: -10%;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: inherit;
      -webkit-transform: skewX(-10deg);
      -moz-transform: skewX(-10deg);
      -ms-transform: skewX(-10deg);
      transform: skewX(-10deg);
    }
  }

  .body {
    margin-left: 2rem;
  }
  .hero-text {
    margin-left: 3rem;
  }

  h1 {
    font-size: 2.5rem;
    font-size: clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
  }

  h1 span {
    color: var(--colorTxt2);
  }
  h3 {
    font-size: 3rem;
    font-size: clamp(3rem, -0.875rem + 8.333vw, 5.5rem);
    line-height: 1.5;
  }
`;

const Hero = ({ bg }) => (
  <HeroStyle bg={bg.childImageSharp.fluid.src}>
    <div>
      <legend className="html">&#60; html &#62;</legend>

      <legend className="body">&#60; body &#62;</legend>
      <div className="hero-text">
        <h1>
          Hey, I’m<span> Ernesto🤟🏼</span>
        </h1>
        <h3>
          I´m a <span className="javascript">JS</span>
          <span className="react">React</span> Developer who like to make stuff
          for the web
        </h3>
        <h5>
          Also write post stuff I dont find easily on the web for further
          reference.
        </h5>
      </div>
      <legend className="body">&#60; /body &#62;</legend>
      <legend className="html"> &#60; /html &#62;</legend>
    </div>
  </HeroStyle>
);

export default Hero;

Hero.propTypes = {
  bg: PropTypes.object.isRequired,
};
