/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// internal import
// import { setup } from 'twind';
// import { asyncVirtualSheet, getStyleTagProperties } from 'twind/server';
// import { createElement } from 'react';
// import async_hooks from 'async_hooks';

// import './src/tailwind.css';

// const sheet = asyncVirtualSheet();

// setup({ sheet });

// export const wrapPageElement = ({ element }) => {
//   sheet.reset();

//   return element;
// };

// export const onRenderBody = ({ setHeadComponents, pathname }) => {
//   console.log('sheet: ', sheet);
//   const { id, textContent } = getStyleTagProperties(sheet);
//   console.log('twind props: ', { id, textContent });
//   const twindId = `twind-ssr-${id}-${Math.random()}`;

//   // eslint-disable-next-line no-unused-vars
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
