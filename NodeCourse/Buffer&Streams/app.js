// Буферы и потоки
// В NodeJS есть четыре типа потоков, а именно:
// Readable(Читающий), Writable(Пишущий), Duplex(Комплексный(Чтение и запись)), Transform(Преобразующий(Аналогичен комплексному, но позволяет изменять читаемые или записываемые данные))

const fs = require('fs');

// Подключаем модуль zlib
const zlib = require('zlib');
// Создаём преобразующий или как в нашем случае сжимающий поток
const compressStream = zlib.createGzip();

// Создаём читающий поток (Объявляем константу readStream и присваиваем ей работу метода createReadStream в который передаём путь до text.txt)
const readStream = fs.createReadStream('./docs/text.txt');

// Создаём пишущий поток
const writeStream = fs.createWriteStream('./docs/new-text.txt')

// Начинаем с ним взаимодействовать(Точно так же как и в событиях мы используем метод on в который передаём два аргумента - событие и callback, который будет принимать порции данных или чанки) P.S. Добавляем пишущий поток внутрь читающего, тоесть сначала будет происходить чтение большого файла по кускам и затем каждый прочитанный кусок мы будем передавать записывающим потоком в новый файл

// readStream.on('data', (chunk) => {
//   writeStream.write('\n---CHUNK START---\n');
//   writeStream.write(chunk);
//   writeStream.write('\n---CHUNK END---\n');
// })

// Создаём функцию поиска ошибок при чтении или записи
const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...');
}

// Метод pipe осуществляет чтения файла из readStream и передаёт их напремую в writeStream
readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError);