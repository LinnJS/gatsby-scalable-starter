/*  adds support for esModules via esm 
    use ./gatsby-node.esm.js with esModules instead */

// external import
const requireEsm = require('esm')(module);

// internal import
module.exports = requireEsm('./gatsby-node.esm.js');
