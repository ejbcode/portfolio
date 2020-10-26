import { graphql } from 'gatsby';
import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import LatestPost from '../components/LatestPost';
import Layout from '../components/layout';
import Projects from '../components/Projects';
import SEO from '../components/seo';

const Index = ({ data }) => {
  console.log(data.posts);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero bg={data.bg} />
      <About />
      <Projects projects={data.projects.nodes} />
      <LatestPost posts={data.posts.nodes} />
    </Layout>
  );
};

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
          slug
          excerptt
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
        body
      }
    }

    bg: file(relativePath: { eq: "icon-bg.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;
