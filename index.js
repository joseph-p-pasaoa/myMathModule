/* 
  myMathModule

  This is a collaboratively made Math module with support for basic math operations.
  Feel free to use it for you basic math needs.
*/


const Math = {
  PI: 3.141592653589793,
   // Mathematical constant defined as the ratio of a circle's circumference to its diameter.
=======
const sum = require('./sum.js');
const sub = require('./sub.js');
const mul = require('./mul.js');

const Math = {
  PI: 3.141592653589793, // Mathematical constant defined as the ratio of a circle's circumference to its diameter.
  sum: sum,
  sub: sub,
  mul: mul
}

module.exports = Math
