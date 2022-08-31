const fs = require('fs');

/*const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf-8');
// чим більше файл, тим більше буде чанків (шматочків)
myReadShort.on('data', function(chunk) {
  console.log('Нові дані отримані:\n' + chunk);
});*/

// Навчимось записувати дані потоками
// кодування не будемо вказувати
const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf-8');
const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');
myReadShort.on('data', function(chunk) {
  console.log('Нові дані отримані:');
  myWriteShort.write(chunk);
});

//Дозволяє видавати користувачу дані шматочками