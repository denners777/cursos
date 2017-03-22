(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 / n2;
};
},{}],2:[function(require,module,exports){
let number1 = prompt('Number 1:');
let number2 = prompt('Number 2:');
const op = prompt('Operation:')
const result = 0;

number1 = parseInt(number1);
number2 = parseInt(number2);

let operations = {
  '+': require('./sum'),
  '-': require('./sub'),
  '*': require('./mult'),
  '/': require('./div'),
};

/*function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function mult(n1, n2) {
  return n1 * n2;
}

function div(n1, n2) {
  return n1 / n2;
}*/

console.log(operations[op](number1, number2));
},{"./div":1,"./mult":3,"./sub":4,"./sum":5}],3:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 * n2;
};
},{}],4:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 - n2;
};
},{}],5:[function(require,module,exports){
module.exports = (n1, n2) => {
  return n1 + n2;
};
},{}],6:[function(require,module,exports){
console.log(require('./main.js'));
},{"./main.js":2}]},{},[6]);
