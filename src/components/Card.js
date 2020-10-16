import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  margin: 0 auto;

  code {
    font-size: 2.7rem;
  }

  .card {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: auto;
  }
  .card-front {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    overflow: hidden;
    background: linear-gradient(45deg, #101010, #2c3e50);
  }

  .card .line-numbers {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.03);
    font-size: 1.3rem;
  }
  .card .line-numbers > div {
    padding: 2.5px 0;
    opacity: 0.25;
    color: whitesmoke;
  }

  .card .indent {
    padding-left: 4.5rem;
  }
  .card .operator {
    color: #4dd0e1;
  }
  .card .string {
    color: #9ccc65;
  }
  .card .variable {
    color: #ba68c8;
  }
  .card .property {
    color: #ef5350;
  }
  .card .method {
    color: #29b6f6;
  }
  .card .function {
    color: #fdd835;
  }
  .card .boolean {
    color: #4dd0e1;
  }
`;

const Card = () => (
  <CardStyle>
    <div className="card">
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
        </div>
        <code>
          <span className="variable">const </span>
          <span className="function">aboutMe </span>
          <span className="operator"> = </span>
          &#123; <span />
          <div className="indent">
            {' '}
            <span className="property">name</span>
            <span className="operator">:</span>
            <span className="string">'Ernesto Briceño'</span>
            <span>,</span>
          </div>
          <div className="indent">
            {' '}
            <span className="property">title</span>
            <span className="operator">:</span>
            <span className="string">'Front end Developer'</span>
            <span>,</span>
          </div>
          <div className="indent">
            {' '}
            <span className="property">contact</span>
            <span className="operator">:</span>
            <span />
            <div className="indent">
              {' '}
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
          <div className="indent">
            {' '}
            <span className="property">contact</span>
            <span className="operator">:</span>
            <span />
            <div className="indent">
              {' '}
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
          <span> &#125; &#091;&#093;</span>
        </code>
      </div>
    </div>
  </CardStyle>
);

export default Card;
