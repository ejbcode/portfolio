import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';
import InstaGrid from '../components/InstaGrid';

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people❤</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Go home</Link> <br />
    <InstaGrid insta={data.insta.nodes} />
  </Layout>
);

export default SecondPage;

export const query = graphql`
  {
    insta: allInstagramContent(limit: 3) {
      nodes {
        caption
        media_url
        localImage {
          childImageSharp {
            fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
