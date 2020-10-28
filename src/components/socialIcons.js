import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const ListOfIcons = styled.div`
  ul {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    font-size: 3rem;
  }
  a {
    color: var(--colorTxt);
    font-size: 3rem;
  }
  a:hover {
    color: var(--colorTxt2);
  }
`;

const SocialIcons = () => (
  <ListOfIcons>
    <ul>
      <li>
        <a
          href="http://github.com/ejbcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ejbcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/ejbcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>

      <li>
        <a
          href="mailto:ejbcode@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </li>
    </ul>
  </ListOfIcons>
);

export default SocialIcons;
