import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const GridPostStyle = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 3rem 2rem 0;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const InstaGrid = ({ insta }) => (
  <div>
    <h1>sd</h1>
    <GridPostStyle>
      {insta.map(post => (
        <div className="project-item">
          <Img fluid={post.localImage.childImageSharp.fluid} />
        </div>
      ))}
    </GridPostStyle>
    {/* <pre>{JSON.stringify(insta, null, 4)}</pre> */}
  </div>
);

export default InstaGrid;
