import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  p {
    font-size: 1.5rem;
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
    <Layout>
      <Container>
        <p>⏳{postData.fields.readingTime.text}</p>
        <MDXRenderer>{postData.body}</MDXRenderer>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </Container>
    </Layout>
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
          slug
          excerptt
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
