import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';
import InstaGrid from '../components/InstaGrid';

const SecondPage = ({ data }) => {
  const [instaData, setInstaData] = useState([]);
  useEffect(() => {
    // get data from GitHub api
    fetch(`
    https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":1156562294,"first":5}`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setInstaData(resultData.data.user.edge_owner_to_timeline_media.edges);
      });
  }, []);
  return (
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
      <div>
        {instaData.map(post => {
          console.log(post.node.edge_media_to_caption.edges[0].node.text);
          return (
            <img
              src={post.node.thumbnail_resources[0].src}
              alt={post.node.edge_media_to_caption.edges[0].node.text}
            />
          );
        })}
      </div>
      {/* <pre>{JSON.stringify(instaData, null, 4)}</pre> */}
    </Layout>
  );
};

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
