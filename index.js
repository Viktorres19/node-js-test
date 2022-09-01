const express = require('express');
// визиваємо експрес і присвоюємо його до змінної
const app = express();

app.set('view engine', 'ejs');

// щоб відображати файли в браузері треба змінити метод send на sendFile
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get('/news', function(req, res) {
  res.sendFile(__dirname + "/contacts.html");
});
//тепер з параметрами які будуть мінятись
/*app.get('/contacts/:id', function(req, res) {
  res.send('ID is - ' + req.params.id);
})*/
//тепер використаємо шаблон
app.get('/news/:id', function(req, res) {
  const obj = {title: "Новина", id: 4, paragraphs: ['Параграф', 'Звичайний текст', 'Числа: 2, 4, 5', 99]};
  res.render('news', {newsId: req.params.id, newParam: 234, obj: obj});
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
