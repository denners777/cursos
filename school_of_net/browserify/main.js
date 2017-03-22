var num1 = prompt('Number 1:');
var num2 = prompt('Number 2:');

var op = prompt('Operation:');

var result = 0;
num1 = parseInt(num1);
num2 = parseInt(num2);

if (op == '+') {
  result = num1 + num2
}

if (op == '-') {
  result = num1 - num2
}
module.exports = result;