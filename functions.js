// Basic logging function.

/*

const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello('David');
sayHello('Rae');

*/

// Basic logging function vs a return function.

/*

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole('David');

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('Rae');

console.log(greeting);

*/

/* 

isEven function: returns true or false depending 
on the number being even or not.

*/

function isEven(num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);