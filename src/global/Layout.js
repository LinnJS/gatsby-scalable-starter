import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GlobalStyles as GlobalTailwindStyles } from 'twin.macro';

import theme from 'global/theme';
import GlobalStyle from './GlobalStyle';

const Layout = ({ children }) => {
  const [isLightTheme, toggleTheme] = useState(true);

  const { site, icon } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      icon: file(name: { eq: "icon" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, width: 50, height: 50)
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>

      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        <GlobalStyle />
        <GlobalTailwindStyles />
        <Header>
          <GatsbyImage alt="Gatsby icon" image={icon.childrenImageSharp[0].gatsbyImageData} />
          Gatsby Scalable <button onClick={() => toggleTheme(!isLightTheme)}>Toggle Theme</button>
        </Header>

        <>{children}</>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
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
