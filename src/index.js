/**
 * optimize-me-js
 * JavaScript equivalents of Python algorithms for optimization
 */

const dsa = require('./dsa/index.js');
const math = require('./math/index.js');
const matrix = require('./matrix/index.js');
const stats = require('./stats/index.js');

module.exports = {
  ...dsa,
  ...math,
  ...matrix,
  ...stats
};
