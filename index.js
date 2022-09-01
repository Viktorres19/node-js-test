const express = require('express');
// визиваємо експрес і присвоюємо його до змінної
const app = express();
// запит на сервер (гет і пост)
app.get('/', function(req, res) {
  // вказуємо любу строку, яку ми будемо виводити в браузер
  res.send('This is home');
});
// можемо додати іще одну сторінку
app.get('/news', function(req, res) {
  res.send('This is news');
});
// щоб відслідковувати id статей, додамо через двокрапку id
app.get('/news/:id', function(req, res) {
  res.send(`ID is - ${req.params.id}`); // http://127.0.0.1:3000/news/25 => ID is - 25
});
// слухаємо порт
app.listen(3000);

// при такій сторінці http://127.0.0.1:3000/about-us вже буде відповідь: Cannot GET /news

/*
const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
  console.log("URL сторінки: " + req.url);
  if (req.url === '/index' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contacts') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/contacts.html').pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});
server.listen(3000, '127.0.0.1');
console.log("Ми відслідковуємо порт 3000");
*/
