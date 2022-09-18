// Модуль событий(Импортируем модуль в файл app.js) P.S. Импорт эмитера больше не нужен
// const EventEmitter = require('events');

// Импортируем модуль log в модуль app. P.S. Вся логика находится в конструкторе Logger поэтому в качестве создателя события и его вызова мы используем экземпляр logger
const Logger = require('./log');
const logger = new Logger();

// Добавляем экземпляр событий P.S. Создание экземпляра больше не нужен
// const emitter = new EventEmitter();

// Создаём метод слежения за событием
logger.on('some_event', (args) => {
  // Выполняем деструктуризацию значений из args и выводим в консоль
  const { id, text } = args;
  console.log(id, text);
});

logger.log('User Logged!');

// В app.js описаны события за которыми мы следим