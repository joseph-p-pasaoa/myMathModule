/* 
  myMathModule

  This is a collaboratively made Math module with support for basic math operations.
  Feel free to use it for you basic math needs.
*/
const sum = require('./sum');
const div = require('./divide.js');
const Math = {
  PI: 3.141592653589793, // Mathematical constant defined as the ratio of a circle's circumference to its diameter.
  sum: sum,
  div: div
}

module.exports = Math
