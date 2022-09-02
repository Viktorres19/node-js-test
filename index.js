const express = require('express');
const bodyParser = require('body-parser')
// визиваємо експрес і присвоюємо його до змінної
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
//вказуємо який енджин будемо використовувати
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

// щоб відображати файли в браузері треба змінити метод send на sendFile
app.get('/', function(req, res) {
  // res.sendFile(__dirname + "/index.html");
  res.render('index')
});
// скористаємось bodyParser
app.post('/about', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  // буде рендеритись ця сторінка
  res.render('about-success', {data: req.body});
});
app.get('/about', function(req, res) {
  // res.sendFile(__dirname + "/about.html");
  res.render('about')
});
//тепер з параметрами які будуть мінятись
/*app.get('/contacts/:id', function(req, res) {
  res.send('ID is - ' + req.params.id);
})*/
//тепер використаємо шаблон
app.get('/news/:id', function(req, res) {
  const obj = {title: "Новина", id: 4, paragraphs: ['Paragraph', 'Usual text', 'Numbers: 2, 4, 5', 99]};
  // шаблон news ejs
  res.render('news', {newsId: req.params.id, newParam: 234, obj: obj});
  // http://127.0.0.1:3000/news/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8F
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
    fs.createReadStream(__dirname + '/news.html').pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});
server.listen(3000, '127.0.0.1');
console.log("Ми відслідковуємо порт 3000");
*/
