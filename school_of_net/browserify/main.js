let number1 = prompt('Number 1:');
let number2 = prompt('Number 2:');
const op = prompt('Operation:')
const result = 0;

//require('./main.scss');

number1 = parseInt(number1);
number2 = parseInt(number2);

let operations = {
  '+': require('./sum'),
  '-': require('./sub'),
  '*': require('./mult'),
  '/': require('./div'),
};

console.log(operations[op](number1, number2));

var template = require("./custom.hbs");
document.body.innerHTML = template({name: "Denner"});

var Handlebars = require('hbsfy/runtime');
Handlebars.registerHelper('fullName', function(){
  return 'Denner Fernandes';
});
console.log(Handlebars);