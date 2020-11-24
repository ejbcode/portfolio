import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import LatestPost from '../components/LatestPost';
import Contact from '../components/Contact';
import SEO from '../components/seo';

const Index = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero bg={data.bg} />
    <About />
    <Projects projects={data.projects.nodes} />
    <LatestPost posts={data.posts.nodes} />
    <Contact />
  </Layout>
);

export default Index;

export const query = graphql`
  {
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          livedemo
          repo
          show
          techs
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        body
      }
    }

    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      limit: 3
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

    bg: file(relativePath: { eq: "bg.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;

Index.propTypes = {
  data: PropTypes.object.isRequired,
};
