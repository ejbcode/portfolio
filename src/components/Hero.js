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
  padding-top: 20px;
  padding-bottom: 80px;
  /* */
  :before {
    background: url('/static/5f32f2a5d7a41ba61776a5488727b7b6/73c85/pattern.png');
    background-position: 50%;
    background: linear-gradient(
        340deg,
        rgba(153, 218, 255, 0) 14%,
        rgba(153, 218, 255, 0.03) 17%,
        rgba(0, 128, 128, 1) 100%
      ),
      url('/static/4092b117f74aadccd50747e69a809822/2244e/icon-bg.jpg');

    background-image: linear-gradient(
        179deg,
        rgba(37, 40, 53, 0) 14%,
        rgba(37, 40, 53, 0.03) 57%,
        rgba(37, 40, 53) 100%
      ),
      url('/static/4092b117f74aadccd50747e69a809822/2244e/icon-bg.jpg');
    background-size: 400px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
    z-index: -10;
    content: '';
    opacity: 0.14;
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
    padding: 0px 10px;
    margin: 0;
    padding-inline: 20px 40px;
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

const Hero = ({ bg }) => {
  console.log(bg);
  return (
    <HeroStyle>
      <div>
        <legend className="html">&#60; html &#62;</legend>

        <legend className="body">&#60; body &#62;</legend>
        <div className="hero-text">
          <h1>
            Hey, I’m<span> Ernesto🤟🏼</span>
          </h1>
          <h3>
            I´m a <span className="react">React</span> Developer who like to
            make stuff for the web
          </h3>
          <h6> Also takes notes of what I´ve learning. </h6>
        </div>
        <legend className="body">&#60; /body &#62;</legend>
        <legend className="html"> &#60; /html &#62;</legend>
      </div>
    </HeroStyle>
  );
};

export default Hero;
