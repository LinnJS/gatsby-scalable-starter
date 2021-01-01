/*  adds support for esModules via esm 
    use ./gatsby-node.esm.js with esModules instead */
const requireEsm = require('esm')(module);
module.exports = requireEsm('./gatsby-node.esm.js');
