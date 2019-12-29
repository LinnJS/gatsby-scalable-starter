import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../components/Image';
import theme from './theme';

import GlobalStyle from './GlobalStyle';

const Layout = ({ children }) => {
  const [isLightTheme, toggleTheme] = useState(true);
  console.log('theme', theme);
  console.log('isLightTheme', isLightTheme);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          imageSharp(fixed: { originalName: { eq: "icon.png" } }) {
            id
            fixed(height: 50, width: 50) {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      `}
      render={data => (
        <div>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          </Helmet>
          <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
            <GlobalStyle />
            <Header>
              <Image fixed={data.imageSharp.fixed} />
              Gatsby Scalable <button onClick={() => toggleTheme(!isLightTheme)}>Toggle Theme</button>
            </Header>
            <>{children}</>
          </ThemeProvider>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = styled.header`
  align-items: center;
  color: ${({ theme }) => theme.color};
  display: flex;
  height: 70px;
  justify-content: space-between;
  left: 0;
  padding: 15px 30px;
  position: fixed;
  right: 0;
  top: 0;

  button {
    background: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    padding: 10px 15px;
    border-radius: 4px;
  }

  .gatsby-image-wrapper {
    width: 100px;
  }
`;

export default Layout;
