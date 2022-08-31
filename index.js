// imported built in modules
const events = require('events');
const util = require('util');

const Cars = function functionName(model) {
  this.model = model;
};

util.inherits(Cars, events.EventEmitter);

const bmw = new Cars('BMW');
const audi = new Cars('Audi');
const volvo = new Cars('Volvo');

const cars = [bmw, audi, volvo];
cars.forEach(function(car) {
  car.on('speed', function(text) {
    console.log(car.model + " speed is - " + text);
  })
});

bmw.emit('speed', '254.5 km');
volvo.emit('speed', '180 km');
// const things = require('./things');

/*
let myEmit = new events.EventEmmiter();

myEmit.on('someEvent', function(text) {
  console.log(text);
});

myEmit.emit('someEvent', 'Обробник подій спрацював!');*/
