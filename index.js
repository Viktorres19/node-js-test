
// В Node JS существует модуль с названием fs (file system), отвечающий за работу с файлами. Благодаря модулю мы можем работать с файлами (создавать, удалять, записывать и считывать данные), директориями, а также с потоками данных. Про дополнительные возможности мы поговорим в следующих уроках, а в этом лишь затронем тему чтения и записи файлов как в синхронном, так и в асинхронном режиме.
const fs = require('fs');

//це синхронні операції
// синхронно (ім'я файла та кодування)
/*const fileRead = fs.readFileSync('text.txt', 'utf-8');
// код далі спрацює лише після того як метод прочитає весь файл
console.log(fileRead); //Ура, ви мене прочитали!
// створимо змінну
let message = 'Gibbon\n' + fileRead;
//запишемо тепер
fs.writeFileSync('some-new-file.txt', message); // з'явиться новий файл, в який ми запишемо значення змінної*/


// це асинхронні операції.
// 3й параметр - функція, яка спрацює, коли файл повність прочитаний
fs.readFile('text.txt', 'utf-8', function(err, data) {
  console.log(data); // спрацює другим
});
// текст 'Hi, it is me' буде застосований в data
fs.writeFile('some.txt', 'Hi, it is me', function(err, data) {}); // Далі створиться файл з контентом

console.log("Test"); // спрацює першим