/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// internal import
require('./src/tailwind.css');
// const { setup } = require('twind');
// // eslint-disable-next-line no-unused-vars
// const { asyncVirtualSheet, getStyleTagProperties } = require('twind/server');
// const { createElement } = require('react');

// const sheet = asyncVirtualSheet();

// setup({ sheet });

// exports.wrapPageElement = ({ element }) => {
//   sheet.reset();

//   return element;
// };

// exports.onRenderBody = ({ setHeadComponents, pathname }) => {
//   console.log('sheet: ', sheet);
//   const { id, textContent } = getStyleTagProperties(sheet);
//   console.log('twind props: ', { id, textContent });
//   const twindId = `twind-ssr-${id}-${Math.random()}`;

//   const styleProps = {
//     id,
//     dangerouslySetInnerHTML: {
//       __html: textContent,
//     },
//   };
//   setHeadComponents([
//     createElement('style', {
//       id: twindId,
//       dangerouslySetInnerHTML: {
//         __html: textContent,
//       },
//     }),
//   ]);
// };
