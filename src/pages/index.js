import { graphql } from 'gatsby';
import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import Projects from '../components/Projects';
import SEO from '../components/seo';

const Index = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero bg={data.bg} />
    <About />
    <Projects projects={data.projects} />
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
        body
      }
    }

    bg: file(relativePath: { eq: "pattern.svg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;
