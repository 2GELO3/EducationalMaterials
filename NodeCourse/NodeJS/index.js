// Каждый модуль оборачивается вот в такую функцию P.S. Пример:
// (function (exports, require, module, __dirname, __filename) {
//   const chalk = require('chalk');
//   const text = require('./data.js')

//   console.log(chalk.blue(text));
// });


const chalk = require('chalk');
const text = require('./data.js')

console.log(chalk.blue(text));

// Это системная переменная которая показывает путь до папки в которой и ведётся разработка
console.log(__dirname);

// Эта системная переменная также показывает абсолютный путь до текущей папки, но присутствует также название самого файла
console.log(__filename);


// Создаём собственные веб-сервера с помощью встроенного модуля http
const http = require('http')

// Для того, чтобы работать с файлами в NodeJS присутствует пакет fs
const fs = require('fs');

// Path используем для работы с путями
const path = require('path');


const server = http.createServer((req, res) => {

  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }

  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // } else if (req.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }

  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // }

  // Оптимизируем вышенаписанный код

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
  })
})

const PORT = process.env.PORT || 3000

// Передаём порт как фиксированную константу
server.listen(3000, () => {
  console.log(`Server has been started... ${PORT}`);
})
