/**
 * DSA Module - Data Structures and Algorithms
 */

const cachingMemoization = require('./cachingMemoization.js');
const nodes = require('./nodes.js');
const various = require('./various.js');

module.exports = {
  ...cachingMemoization,
  ...nodes,
  ...various
};
