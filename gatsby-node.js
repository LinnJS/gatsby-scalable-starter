/*  adds support for esModules via esm 
    use ./gatsby-node.esm.js with esModules instead */

// external import
const requireEsm = require('esm')(module);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        async_hooks: 'node:async_hooks',
      },
    },
  });
};

// internal import
module.exports = requireEsm('./gatsby-node.esm.js');
