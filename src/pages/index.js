import React from 'react';

import Layout from '@common/Layout';
import Header from '@sections/Header';
import About from '@sections/About';
/* eslint-disable no-unused-vars*/
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
/* eslint-enable no-unused-vars*/

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    {/* <Brands />
    <Team />
    <Faq /> */}
  </Layout>
);

export default IndexPage;
