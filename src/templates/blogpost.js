import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ComponentName = ({ data }) => {
  const postData = data.allMdx.nodes[0];
  return (
    <>
      <MDXRenderer>{postData.body}</MDXRenderer>
      <pre>{JSON.stringify(data, null, 4)}</pre>
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
        excerpt(truncate: false)
      }
    }
  }
`;
