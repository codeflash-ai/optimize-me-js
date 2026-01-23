/**
 * Matrix Module - Linear Algebra and Signal Processing
 */

const matrixOperations = require('./matrixOperations.js');
const signalProcessing = require('./signalProcessing.js');

module.exports = {
  ...matrixOperations,
  ...signalProcessing
};
