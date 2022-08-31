const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
  console.log("URL сторінки: " + req.url);
  // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); // вказуємо text/html
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'}); // щоб виводити json
  /*const myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf-8');
  myReadShort.pipe(res); // виводимо контент поступово*/
  let obj = {
    model: 'Audi',
    speed: '234.5',
    wheels: 4
  };
  res.end(JSON.stringify(obj)) // виведемо об'єкт з json на сторінку
});
server.listen(3000, '127.0.0.1');
console.log("Ми відслідковуємо порт 3000");
