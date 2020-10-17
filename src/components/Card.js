import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  margin: 2rem auto;

  .card-front {
    position: relative;
    min-width: 300px;
    max-width: 610px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    overflow: hidden;
    background: linear-gradient(45deg, #101010, #2c3e50);
  }

  code {
    font-size: 1.5rem;
    width: 90%;
    margin-left: 0;
  }
  .line-numbers {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0;
    padding: 0 0.5rem;
    background-color: rgba(255, 255, 255, 0.03);
    font-size: 1.3rem;
  }
  .line-numbers > div {
    padding: 2.5px 0;
    opacity: 0.25;
    color: whitesmoke;
  }

  .indent {
    padding-left: 2.5rem;
  }
  .operator {
    color: #4dd0e1;
  }
  .string {
    color: #9ccc65;
  }
  .variable {
    color: #ba68c8;
  }
  .property {
    color: #ef5350;
  }
  .method {
    color: #29b6f6;
  }
  .function {
    color: #fdd835;
  }
  .boolean {
    color: #4dd0e1;
  }

  @media (min-width: 768px) {
    code {
      font-size: 2rem;
    }
  } ;
`;

const Card = () => (
  <CardStyle>
    <div className="card-front">
      <div className="line-numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
      </div>
      <code>
        <span className="variable">const </span>
        <span className="function">aboutMe </span>
        <span className="operator"> = </span>
        &#123; <span />
        <div className="indent">
          <span className="property">name</span>
          <span className="operator">:</span>
          <span className="string">'Ernesto Briceño'</span>
          <span>,</span>
        </div>
        <div className="indent">
          <span className="property">title</span>
          <span className="operator">:</span>
          <span className="string">'Frontend Developer'</span>
          <span>,</span>
        </div>
        <div className="indent">
          <span className="property">skills</span>
          <span className="operator">:</span>
          <span> &#091; </span>
          <div className="indent">
            <span className="string">
              'HTML/CSS/JS', 'React', 'Gatsby', 'GraphQl', 'APIRest','Node.js',
              'Redux', 'Styled-components', '@emotion', 'Bootstrap',
              'GIT/GitHub'
            </span>
          </div>
          <span>&#093;</span>
        </div>
        <div className="indent">
          <span className="property">contact</span>
          <span className="operator">:</span>
          <span> &#123;</span>
          <div className="indent">
            <span className="property">email</span>
            <span className="operator">:</span>
            <span className="string">'ejbcode@gmail.com'</span>
            <span>,</span>
          </div>
          <div className="indent">
            <span className="property">website</span>
            <span className="operator">:</span>
            <span className="string">'ejbcode.com'</span>
          </div>
          <span>&#125;</span>
        </div>
        <span> &#125;</span>
      </code>
    </div>
  </CardStyle>
);

export default Card;
