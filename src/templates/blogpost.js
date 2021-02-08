import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import SEO from '../components/seo';

const Container = styled.div`
  background: #1212;
  padding: 2rem;
  border-radius: 3rem;
  max-width: 920px;
  margin: 0 auto;
  .center {
    margin: 0 auto;
    text-align: center;
  }

  p,
  ul,
  code,
  pre {
    margin-bottom: 1.5rem;
  }
  .time {
    font-size: 1.5rem;
    text-align: center;
  }

  iframe {
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 768px) {
    p {
      font-size: 2rem;
    }
  }
`;

const ComponentName = ({ data }) => {
  const postData = data.allMdx.nodes[0];
  return (
    <>
      <GlobalStyle />
      <SEO title={data.allMdx.nodes[0].frontmatter.title} />
      {console.log(data)}
      <Navbar blog />

      <Container>
        <p className="time">⏳{postData.fields.readingTime.text}</p>
        <MDXRenderer>{postData.body}</MDXRenderer>
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      </Container>
      <Footer />
    </>
  );
};

export default ComponentName;

export const query = graphql`
  query MyQuery($slug: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        frontmatter {
          title
          date
          tags
          published
          excerpt
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        body
        fields {
          readingTime {
            text
          }
        }
        excerpt(truncate: false)
      }
    }
  }
`;

ComponentName.propTypes = {
  data: PropTypes.object.isRequired,
};
