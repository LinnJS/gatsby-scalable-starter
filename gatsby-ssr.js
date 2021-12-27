/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// internal import
require('./src/tailwind.css');
const { setup } = require('twind');
const { asyncVirtualSheet, getStyleTagProperties } = require('twind/server');
const React = require('react');

const sheet = asyncVirtualSheet();

setup({ sheet });

exports.wrapPageElement = ({ element }) => {
  sheet.reset();

  return element;
};

exports.onRenderBody = ({ setHeadComponents, pathname }) => {
  const { id, textContent } = getStyleTagProperties(sheet);

  // const styleProps = {
  //   id,
  //   dangerouslySetInnerHTML: {
  //     __html: textContent,
  //   },
  // };

  setHeadComponents([
    React.createElement('style', {
      id: `ssr-${id}`,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    }),
  ]);
};
