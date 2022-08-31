// Modules - we link module using require(); directive
// ./ - when files are in the same directory
// and then we import it as function with some other name
const things = require('./things');
// and now we can use this function with other name and pass the parameters to other module on call
console.log(things.arrayCounter([1, 7, 99, 8, 45, 8])); // В масиві знаходиться 6 элемента!
console.log(things.multiply(2, 3)); // 2 умножить 3 равно 6
console.log(things.someValue) // 451