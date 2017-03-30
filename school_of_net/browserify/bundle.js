(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 / n2;
};
},{}],2:[function(require,module,exports){
let number1 = prompt('Number 1:');
let number2 = prompt('Number 2:');
const op = prompt('Operation:')
const result = 0;

require('./main.scss');

number1 = parseInt(number1);
number2 = parseInt(number2);

let operations = {
  '+': require('./sum'),
  '-': require('./sub'),
  '*': require('./mult'),
  '/': require('./div'),
};

console.log(operations[op](number1, number2));
},{"./div":1,"./main.scss":3,"./mult":4,"./sub":5,"./sum":6}],3:[function(require,module,exports){
module.exports = "body h1 {\n  color: red; }\n\nbody {\n  background-color: #000000; }\n";
},{}],4:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 * n2;
};
},{}],5:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 - n2;
};
},{}],6:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 + n2;
};
},{}]},{},[2]);
