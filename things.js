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