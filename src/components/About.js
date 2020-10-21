import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Content = styled.div`
  @media (min-height: 768px) {
    display: flex;
    justify-content: center;

    align-items: center;
    .text {
      width: 40%;
    }
  }
`;

const About = () => (
  <section className="section-container">
    <h2 className="section-title">About me</h2>
    <Content>
      <div className="text">
        <p>
          I like to make stuff for the web. I'm a Systems Engineer, passionate
          about technology, I like to resolve design problems, create smart user
          interface and imagine useful interaction, developing rich web
          experiences & web applications. I have experience with React, Redux,
          javascript, ES6, CSS, HTML5, I have been working and learning more
          every day on this subject and I'm always excited to learn a new
          language or framework. Out of the office you’ll find me dreaming of
          soccer, playing bass guitar, and petting all the good dogs. I am a
          person who loves to spend time coding or learning I love learning new
          things and staying up-to-date with the latest web technologies.
        </p>
      </div>

      <Card />
    </Content>
  </section>
);

export default About;
