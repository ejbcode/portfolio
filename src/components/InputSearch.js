import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  input {
    display: inline-block;
    overflow: visible;
    border: 2px solid #afaebd;
    border-radius: 4px;
    padding: 0.75rem;
    outline: none;
    font-size: 2rem;
    font-weight: 500;
    width: 100%;
    max-width: 80%;
    line-height: 1;
  }

  .counter {
    width: 40px;
    line-height: 40px;
    border: 0;
    border-radius: 50%;
    text-align: center;
    font-size: 1em;
    display: inline-block;
    background-color: var(--colorTxt3);
    color: #2a2135;
    font-weight: 700;
    margin-left: 2rem;
  }
`;

export const InputSearch = ({ posts, setFilterData, q }) => {
  const handleInputChange = event => {
    const search = event.target.value;
    const dataFilter = posts.filter(post => {
      const { title, tags, excerpt } = post.frontmatter;
      return (
        title.toLowerCase().includes(search.toLowerCase()) ||
        (tags && tags.join('').toLowerCase().includes(search.toLowerCase())) ||
        excerpt.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilterData(dataFilter);
  };
  return (
    <div>
      <InputStyle>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Type to filter posts"
        />
        <div className="counter">{q}</div>
      </InputStyle>
    </div>
  );
};

InputSearch.propTypes = {
  q: PropTypes.number.isRequired,
  setFilterData: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};
