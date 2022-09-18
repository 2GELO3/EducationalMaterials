// File System
const fs = require('fs');
const path = require('path');

// Создаём папку test
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Папка создана');

// })

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello NodeJS', err => {
//   if (err) {
//     throw err
//   }

//   console.log('Файл создан');

//   fs.appendFile(filePath, '\nHello Again', err => {
//     if (err) {
//       throw err
//     }

//     console.log('Файл создан');
//   })
// })

// P.S. По умолчанию NodeJS всё считывает в буфферах
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  console.log(content);


  // Превращаем буффер в строку
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString());
})