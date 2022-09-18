// Логирование пользователя
const EventEmitter = require('events');

// Вместо классического наследования которое мы реализовали можно воспользоваться модулем util

// Для начала импортируем его в файл
const util = require('util');

// Убираем extends(Теперь остаётся чистый класс Logger с одним методом log)
class Logger {
  log = (msg) => {
    console.log(msg);

    this.emit('some_event', { id: 1, text: 'Event test text!' });
  }
}

// А затем используя метод inherits мы расширяем данный класс классом EventEmitter, то есть по сути делаем тоже самое наследование
util.inherits(Logger, EventEmitter);

// Экземпляр эмитера больше не нужен
// const emitter = new EventEmitter();

// Создаём класс Logger и наследуем от EventEmitter
// class Logger extends EventEmitter {
//   log = (msg) => {
//     console.log(msg);
//     // Вызываем событие которое мы создали(Вторым аргументом предпочтительней передавать объект)
//     this.emit('some_event', { id: 1, text: 'Event test text!' });
//   }
// }

module.exports = Logger;

// В log.js происходит непосредственный вызов событий за которыми мы следили


// Основная идея в том, что абсолютно в любых модулях с помощью ON можно создавать событие, а вдругих с помощью Emmit его вызывать