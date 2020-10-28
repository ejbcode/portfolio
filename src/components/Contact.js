import React from 'react';
import styled from 'styled-components';
import SocialIcons from './socialIcons';

const Content = styled.div`
  text-align: center;
  .text {
    font-size: 5rem;
  }

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

const Contact = () => (
  <section id="contact" className="section-container">
    <h2 className="section-title">Contact</h2>
    <Content>
      <div className="text">
        <p>Let`s Chat.</p>
      </div>
      <div className="card">
        <h4>I´m always up for a chat</h4>
        <p>
          Pop an email at ejbcode@gmail.com <br />
          or give me a shout on social media
        </p>
        <SocialIcons />
      </div>
    </Content>
  </section>
);

export default Contact;
