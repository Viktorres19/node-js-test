console.log("Hello world!");
//to show the file directory:
console.log(__dirname); // D:\Academy\JavaScript\Working-directory\node-js\node-test
console.log(__filename); // D:\Academy\JavaScript\Working-directory\node-js\node-test\index.js

function test() {
  console.log("Привіт!");
}
test();

const printSomething = function() {
  console.log("Просто текст");
}
printSomething();

// we can call the function from the other function
function call(func) {
  func();
}
call(printSomething);

// Modules - we link module using require(); directive
// ./ - when files are in the same directory
// and then we import it as function with some other name
const counter = require('./array');
// and now we can use this function with other name and pass the parameters to other module on call
console.log(counter([1, 7, 99, 8, 45, 8]));