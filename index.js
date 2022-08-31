
const fs = require('fs');
// асинхронне видалення файлу / другим параметром передамо функцію, яка буде спрацьовувати після видалення файлу file.txt
//fs.unlink('file.txt', function() {}); // файл видалено
// якщо не застосовувати function() {}, буде попередження

// Будемо створювати директорії і видаляти
// спочатку створюємо директорії синхронно
//fs.mkdirSync('new-one'); // з'явиться папка new-one

//Створими папку асинхронно і файла
/*
fs.mkdir('new-one', function() {
  fs.writeFile('./new-one/some_new.txt', 'Передаємо строку другим параметром!', function() {
    console.log('All good!');
  });
});
*/

//Тепер видалимо її асинхронно
// видаляэмо файли в папці
fs.unlink('./new-one/some_new.txt', function() {
  console.log('Deleted file!');
});
// після чого видаляємо саму папку
fs.rmdir('new-one', function() {
  console.log('Deleted dir!');
});


