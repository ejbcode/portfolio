/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import SEO from '../components/seo';
import FilteredPost from '../components/FilteredPost';
import { InputSearch } from '../components/InputSearch';

const Blog = ({ data }) => {
  const [filterData, setFilterData] = useState(data.posts.nodes);
  const posts = data.posts.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <InputSearch
        q={filterData.length}
        setFilterData={setFilterData}
        posts={posts}
      />
      <FilteredPost posts={filterData} title="Blog" />
      {/* <pre>{JSON.stringify(data.posts.nodes, null, 4)}</pre> */}
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  {
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }

      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          tags
          published
          excerpt
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        fields {
          readingTime {
            text
          }
        }
        slug
      }
    }
  }
`;
