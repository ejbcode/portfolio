import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>this is a test blog template</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
);

export default SecondPage;
