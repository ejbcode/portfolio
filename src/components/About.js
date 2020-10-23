import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Content = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      width: 50%;
    }
    .card {
      width: 45%;
    }
  }
`;

const About = () => (
  <section className="section-container">
    <h2 className="section-title">About me</h2>
    <Content>
      <div className="text">
        <p>
          I'm a Systems Engineer, passionate about technology, I like to resolve
          design problems, create smart user interface and imagine useful
          interaction, developing rich UX/UI interface. I have experience with
          React, Redux, Javascript, ES6, CSS, HTML5.
        </p>

        <p>
          I love learning new things and staying up-to-date with the latest web
          technologies. Family guy and dog person.
        </p>
      </div>
      <div className="card">
        <Card />
      </div>
    </Content>
  </section>
);

export default About;
