import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from 'global/Layout';
import { GatsbyTech } from 'assets/svgs';

const LandingPage = () => (
  <Layout>
    <Page>
      <h1>Gatsby Scalable</h1>
      <p>Starter</p>
      <GatsbyTech />
    </Page>
  </Layout>
);

const Page = styled.div`
  ${tw`flex flex-col items-center justify-center mx-auto max-w-7xl sm:px-6 lg:px-8 `};
  height: 70vh;

  h1 {
    ${tw`m-16 text-2xl text-center text-gray-500 `};
  }

  p {
    ${tw`text-gray-500 uppercase `};
    letter-spacing: 10px;
  }

  svg {
    margin-top: 80px;
  }
`;

export default LandingPage;
