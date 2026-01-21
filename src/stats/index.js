/**
 * Stats Module - Statistical and ML Functions
 */

const statistical = require('./statistical.js');
const dataframe = require('./dataframe.js');

module.exports = {
  ...statistical,
  ...dataframe
};
