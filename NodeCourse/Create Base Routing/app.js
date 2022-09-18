// Роутинг(маршрутизация) - это логика, которая позволяет пользователю передвигаться по сайту(Она может быть: нативная, тоесть когда в html документ мы добавляем ссылку на внутрению страницу в результате при клике пользователь получает к ней доступ, а также роутинг может быть эмулирован, если мы говорим о single page application. В этом случае вместо стандартного перехода на новую страницу будет выполнен просто рендеринг нового компонента, но визуально это будет выглядеть именно как переход)

const http = require('http');

// Подключаем модуль файловой системы который нужен для работы с файлами, которые мы будем возвращать в браузер
const fs = require('fs');

// Также подключаем модуль path, который нужен для того, чтобы помогать в формировании корректного пути
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');

  res.setHeader('Content-Type', 'text/html');

  // Cоздаём фунцию createPath(поскольку основная задача, построение пути до файла, её мы можем инкапсулировать для этого внутри функции воспользуемся path.resolve) P.S. Первым аргументом передаём глобальный объект dirname с помощью которого определяем путь до файла, вторым папку views, третьим имя файла
  const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);


  // Cоздаём условие в котором будем проверять адрес приходящего запроса. Далее нам нужно, используя файловую систему, прочитать файл index.html и после прочтения внутри callback функции вернуть его в ответ P.S. Всегда, слышите, всегда нужно завершать ответ, чтобы вернуть контроль браузеру
  // if (req.url = '/') {
  //   fs.readFile('./views/index.html', (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.end();
  //     }
  //     else {
  //       res.write(data);
  //       res.end();
  //     }
  //   })
  // }

  // Убираем обёртку из if и создаём условие swithCase(Принимать оно будет url адрес запроса, а далее в каждом кейсе в переменную path на основании url адреса, мы будем присваивать путь до страницы)
  let basePath = '';

  switch (req.url) {
    // Ну и последнее, а именно множественые пути для одной страницы. P.S. Для этого даже не нужна логика nodeJS, здесь вполне достаточно обычных возможностей switchCase(И это не редирект, а именно обработка нескольких путей и возврат одного html документа)
    case '/':
    case '/home':
    case '/index.html':
      basePath = createPath('index');
      res.statusCode = 200;
      break;
    // Дописываем логику(Если пользователь переходит на старый роут, он атоматически будет перенаправлен на актуалный) P.S. Для этого используется statusCode и setHeader
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/contacts');
      res.end();
      break;
    case '/contacts':
      basePath = createPath('contacts');
      res.statusCode = 200;
      break;
    default:
      basePath = createPath('error');
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    }
    else {
      res.write(data);
      res.end();
    }
  })

});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

// Механизм всего происходящего довольно прост(Определяем какой url-адрес прилетает в запросе и в зависимости от этого возвращаем нужную страницу)