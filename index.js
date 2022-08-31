//link module http
const http = require('http');
// в цю змінну ми помістимо створення нашого серверу
const server = http.createServer(function(req, res) {
  console.log("URL сторінки: " + req.url);
  //в функції будуть дані
  // Заголовки / також треба вказувати кодування
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); // після перезагрузки серверу побачимо результат
  //завершуємо отримання данних і виводимо інфу
  res.end('Привіт світ!');
}); // створили сервер

server.listen(3000, '127.0.0.1');
console.log("Ми відсліджуємо порт 3000"); // http://127.0.0.1:3000/ - за цією адресою буде наш сервер



