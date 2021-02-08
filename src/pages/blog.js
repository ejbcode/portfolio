import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import FilteredPost from '../components/FilteredPost';
import { InputSearch } from '../components/InputSearch';
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Blog = ({ data }) => {
  const [filterData, setFilterData] = useState(data.posts.nodes);
  const posts = data.posts.nodes;

  return (
    <>
      <GlobalStyle />
      <Navbar blog />
      <SEO title="Blog" description="DESSSCCCRRIPTION" />
      <InputSearch
        q={filterData.length}
        setFilterData={setFilterData}
        posts={posts}
      />
      <FilteredPost posts={filterData} title="Blog" />
      <Footer />
    </>
  );
};

export default Blog;

export const query = graphql`
  {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { published: { eq: true } }
      }

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
Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
