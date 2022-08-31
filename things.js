// if we do the module.exports in the moment of creation of the variable, we have the same results
// We will count the quantity elements in the array
/*module.exports.arrayCounter = function(array) {
  return "В масиві знаходиться " + array.length + " элемента!";
}

module.exports.multiply = function (x, y) {
  return `${x} умножить ${y} равно ${x * y}`;
};

module.exports.someValue = 451;*/

// we export the function from this module
// instead of to export it from here we can export on moment of creation and export it
// module.exports.arrayCounter = arrayCounter;
// module.exports.multiply = multiply;
// module.exports.someValue = someValue;


// Third way to create and export parts from the file
// first we create named function
const arrayCounter = function(array) {
  return "В масиві знаходиться " + array.length + " элемента!";
}

const multiply = function (x, y) {
  return `${x} умножить ${y} равно ${x * y}`;
};

let someValue = 451;

//then we export all at once here
module.exports = {
  arrayCounter: arrayCounter,
  multiply,
  someValue
}