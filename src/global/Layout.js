import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import tw, { GlobalStyles as GlobalTailwindStyles } from 'twin.macro';

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
        <GlobalTailwindStyles />
        <GlobalStyle />
        <Header>
          <GatsbyImage alt="Gatsby icon" image={icon.childrenImageSharp[0].gatsbyImageData} />
          <button onClick={() => toggleTheme(!isLightTheme)}>Toggle Theme</button>
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
  ${tw`fixed left-0 right-0 top-0 flex items-center justify-between h-20 px-3.5 py-8`};
  color: ${({ theme }) => theme.color};

  button {
    ${tw`px-2.5 py-3 rounded`};
    background: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
  }

  .gatsby-image-wrapper {
    ${tw`w-28`};
  }
`;

export default Layout;
