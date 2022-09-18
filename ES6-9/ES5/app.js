// let browserType = 'mozilla';

// console.log(browserType.indexOf('zilla'));
// console.log(browserType.slice(0, 3));

// let radData = 'My NaMe Is MuD';

// console.log(radData.toUpperCase());
// console.log(radData.toLowerCase());

// console.log(browserType.replace('moz', 'van'));



// let list = document.querySelector('.output ul');
// list.innerHTML = '';
// let greetings = ['С днём рождения!',
//   'С Рождеством, любовь моя',
//   'Счастливого Рождества всей твоей семье',
//   'Ты — та, кто нужен мне на Рождество',
//   'Поправляйся скорее'];



// for (let i = 0; i < greetings.length; i++) {
//   let input = greetings[i];
//   if (greetings[i].indexOf('Рождеств') !== -1) {
//     let result = input,
//       listItem = document.createElement('li');

//     listItem.textContent = result;
//     list.appendChild(listItem);
//   }
// }


// let list = document.querySelector('.output ul');
// list.innerHTML = '';
// let cities = ['лонДон', 'МанЧЕСТёр', 'БиРминГЕМ', 'лиВЕРпуЛЬ'];

// for (let i = 0; i < cities.length; i++) {
//   let input = cities[i],
//     lower = input.toLowerCase(),
//     firstLetter = lower.slice(0, 1),
//     capitalized = lower.replace(firstLetter, firstLetter.toUpperCase()),
//     result = capitalized,
//     listItem = document.createElement('li');

//   listItem.textContent = result;
//   list.appendChild(listItem);
// }

// let list = document.querySelector('.output ul');
// list.innerHTML = '';
// let stations = ['MAN675847583748sjt567654;Manchester Piccadilly', 'GNF576746573fhdg4737dh4;Greenfield', 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street', 'SYB4f65hf75f736463;Stalybridge', 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// let station = 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street'

// for (let i = 0; i < stations.length; i++) {
//   let input = stations[i],
//     code = input.slice(0, 3),
//     semiC = input.indexOf(';'),
//     name = input.slice(semiC + 1);
//   result = `${code}: ${name}`;



//   listItem = document.createElement('li');

//   listItem.textContent = result;
//   list.appendChild(listItem);
// }

// let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// myNewString,
// dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// console.log(dogNames.toString());
// console.log(myArray = myData.split(','));
// console.log(myArray.push('Cardiff'));
// console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);
// console.log(myArray.unshift('Edinburgh'));
// console.log(myArray);
// console.log(myArray.shift());
// console.log(myArray);

// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);
// console.log(myNewString = myArray.join(','));


// let products = 'Underpants:6.99,Socks:5.99,T-shirt:14.99,Trousers:31.99,Shoes:23.99',
//   total = 0;


// for (let i = 0; i < products.length; i++) {

//   let subArray = products[i].split(':'),
//     name = subArray[0],
//     price = Number(subArray[1]);

//   total += price;
//   let itemText = `${name} - ${price} $`;
//   console.log(itemText);
// }

// var list = document.querySelector('.output ul');
// var searchInput = document.querySelector('.output input');
// var searchBtn = document.querySelector('.output button');

// list.innerHTML = '';

// var myHistory = [];

// searchBtn.onclick = function () {

//   if (searchInput.value !== '') {
//     // number 1
//     myHistory.unshift(searchInput.value)


//     list.innerHTML = '';

//     for (var i = 0; i < myHistory.length; i++) {
//       itemText = myHistory[i];
//       var listItem = document.createElement('li');
//       listItem.textContent = itemText;
//       list.appendChild(listItem);
//     }
//     if (myHistory.length >= 5) {
//       // number 2
//       myHistory.pop()
//     }

//     searchInput.value = '';
//     searchInput.focus();
//   }
// }


// let select = document.querySelector('select'),
//   para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   let choice = select.value;

//   switch (choice) {
//     case 'sunny':
//       para.textContent = 'Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.';
//       break;
//     case 'rainy':
//       para.textContent = 'На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго';
//       break;
//     case 'snowing':
//       para.textContent = 'Идёт снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
//       break;
//     case 'overcast':
//       para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//       break;
//     default:
//       para.textContent = '';
//   }
// }

// let select = document.querySelector('select'),
//   html = document.querySelector('html');

// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//   html.style.background = bgColor;
//   html.style.color = textColor;
// }


// select.onchange = function () {
//   (select.value === 'black') ? update('black', 'white') : update('white', 'black');
// }

// let select = document.querySelector('select'),
//   list = document.querySelector('ul'),
//   h1 = document.querySelector('h1');

// select.onchange = function () {
//   let choice = select.value,
//     days = 31;

//   if (choice === 'Февраль') {
//     days = 28;
//   } else if (choice === 'Апрель' || choice === 'Июнь' || choice === 'Сентябрь' || choice === 'Ноябрь') {
//     days = 30;
//   }

//   createCalendar(days, choice);
// }

// function createCalendar(days, choice) {
//   list.innerHTML = '';
//   h1.textContent = choice;
//   for (var i = 1; i <= days; i++) {
//     let listItem = document.createElement('li');
//     listItem.textContent = i;
//     list.appendChild(listItem);
//   }
// }

// createCalendar(31, 'Январь');

// let select = document.querySelector('select'),
//   html = document.querySelector('.output');

// select.onchange = function () {
//   let choice = select.value;

//   switch (choice) {
//     case 'white':
//       update('white', 'black');
//       break;
//     case 'black':
//       update('black', 'white');
//       break;
//     case 'purple':
//       update('purple', 'white');
//       break;
//     case 'yellow':
//       update('yellow', 'black');
//       break;
//     case 'psychedelic':
//       update('red', 'black');
//       break;
//   }
// }

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }


// let contacts = ['Григорий:2232322', 'Марина:3453456', 'Василий:7654322', 'Наталья:9998769', 'Диана:9384975'],
//   para = document.querySelector('p'),
//   input = document.querySelector('input'),
//   btn = document.querySelector('button');


// btn.addEventListener('click', function () {
//   let searchName = input.value;

//   input.value = '';
//   input.focus();

//   for (let i = 0; i < contacts.length; i++) {
//     let splitContact = contacts[i].split(':');
//     if (splitContact[0] === searchName) {
//       para.textContent = splitContact[0] + ', тел.: ' + splitContact[1] + '.';
//       break;
//     } else {
//       para.textContent = 'Контакт не найден.';
//     }
//     // console.log(para.textContent);

//   }
// });

// let num = input.value;

// for (let i = 1; i <= num; i++) {
//   let sqRoot = Math.sqrt(i);
//   if (Math.floor(sqRoot) !== sqRoot) {
//     continue;
//   }

//   console.log(para.textContent += i + ' ');

// }

// let cats = ['Билл', 'Макс', 'Пикси', 'Алиса', 'Жасмин'],
//   info = 'Моих кошек зовут ',
//   para = document.querySelector('p');

// for (let i = 0; i < cats.length; i++) {
//   // console.log(info += cats);
//   // break;
//   // info += cats[i] + ', ';

//   if (i === cats.length - 1) {
//     info += 'и ' + cats[i] + '.';
//   } else {
//     info += cats[i] + ', ';
//   }
// }

// para.textContent = info;

// let i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     info += 'and ' + cats[i] + '.';
//   } else {
//     info += cats[i] + ', ';
//   }

// }

// let i = 0;

// do {
//   if (i === CacheStorage.length - 1) {
//     info += 'and ' + cats[i] + '.';
//   } else {
//     info += cats[i] + ', ';
//   }

//   i++;
// } while (i < cats.length);

// let output = document.querySelector('.output');
// output.innerHTML = '';
// let para = document.createElement('p');
// para.textContent = '';
// output.appendChild(para);


// for (let i = 10; i > 0; i--) {

//   if (i == 10) {
//     para.textContent = 'Обратный отсчёт 10';
//   } else if (i == 0) {
//     para.textContent = 'Пуск';
//   } else {
//     para.textContent = i;
//   }
// }

// var output = document.querySelector('.output');
// output.innerHTML = '';

// var i = 10;

// while (i >= 0) {
//   var para = document.createElement('p');
//   if (i === 10) {
//     para.textContent = 'Countdown ' + i;
//   } else if (i === 0) {
//     para.textContent = 'Blast off!';
//   } else {
//     para.textContent = i;
//   }

//   output.appendChild(para);

//   i--;
// }

// let people = ['Крис', 'Анна', 'Колин', 'Терри', 'Фил', 'Лола', 'Сём', 'Кай', 'Брюс'],
//   admitted = document.querySelector('.admitted'),
//   redused = document.querySelector('.refused');

// admitted.textContent = 'Пригласить: ';
// refused.textContent = 'Не приглашать(!): ';


// for (let i = 0; i < people.length; i++) {
//   if (people[i] == 'Фил' || people[i] == 'Лола') {
//     refused.textContent += people[i];
//   } else {
//     admitted.textContent += people[i];
//   }
// }


// const x = 1;

// function a() {
//   const y = 2;
// }

// function b() {
//   const z = 3;
// }

// function output(value) {
//   const para = document.createElement('p');
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }

// function Brick() {
//   this.width = 10;
//   this.height = 20;
// }

// function BlueGlassBrick() {
//   Brick.call(this);

//   this.opacity = 0.5;
//   this.color = 'blue';
// }


// const input = document.querySelector('input');
// const btn = document.querySelector('button');
// const para = document.querySelector('p');

// btn.onclick = function () {
//   const code = input.value;
//   para.textContent = eval(code);
// }

// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first,
//     last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
// };

// Person.prototype.bio = function () {
//   // First define a string, and make it equal to the part of
//   // the bio that we know will always be the same.
//   let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
//   // define a variable that will contain the pronoun part of
//   // the second sentence
//   let pronoun;

//   // check what the value of gender is, and set pronoun
//   // to an appropriate value in each case
//   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//     pronoun = 'He likes ';
//   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//     pronoun = 'She likes ';
//   } else {
//     pronoun = 'They like ';
//   }

//   // add the pronoun string on to the end of the main string
//   string += pronoun;

//   // use another conditional to structure the last part of the
//   // second sentence depending on whether the number of interests
//   // is 1, 2, or 3
//   if (this.interests.length === 1) {
//     string += this.interests[0] + '.';
//   } else if (this.interests.length === 2) {
//     string += this.interests[0] + ' and ' + this.interests[1] + '.';
//   } else {
//     // if there are more than 2 interests, we loop through them
//     // all, adding each one to the main string followed by a comma,
//     // except for the last one, which needs an and & a full stop
//     for (let i = 0; i < this.interests.length; i++) {
//       if (i === this.interests.length - 1) {
//         string += 'and ' + this.interests[i] + '.';
//       } else {
//         string += this.interests[i] + ', ';
//       }
//     }
//   }

//   // finally, with the string built, we alert() it
//   alert(string);
// };

// Person.prototype.greeting = function () {
//   alert('Hi! I\'m ' + this.name.first + '.');
// };

// Person.prototype.farewell = function () {
//   alert(this.name.first + ' has left the building. Bye for now!');
// }

// let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);




// function Teacher(first, last, age, gender, interests, subject) {

//   Person.call(this, first, last, age, gender, interests);

//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);

// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
//   enumerable: false,
//   writable: true
// });

// Teacher.prototype.greeting = function () {
//   let prefix;

//   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//     prefix = 'Mr.';
//   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//     prefix = 'Mrs.'
//   } else {
//     prefix = 'Mx.';
//   }

//   alert(`Hello. My name is ${prefix} ${this.name.last}, and i teach ${this.subject}.`);
// }

// let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');



// // Shape - Super Class
// function Shape() {
//   this.x = 0;
//   this.y = 0;
// }

// // method super class
// Shape.prototype.move = function (x, y) {
//   this.x += x;
//   this.y += y;
//   console.info('Фигура переместилась');
// };

// // Rectangle - subclass
// function Rectangle() {
//   Shape.call(this);
// }

// // Subclass expands super class
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// let rect = new Rectangle();

// console.log('Является ли rect экземпляром Rectangle? ' + (rect instanceof Rectangle)); // true
// console.log('Является ли rect экземпляром Shape? ' + (rect instanceof Shape)); // true
// rect.move(1, 1); // выведет 'Фигура переместилась.'


// function MyClass() {
//   SuperClass.call(this);
//   OtherSuperClass.call(this);
// }

// MyClass.prototype = Object.create(SuperClass.prototype);
// mixin(MyClass.prototype, OtherClass.prototype);

// MyClass.prototype.myMethod = function () {
//   // -----------------
// };

// let o;

// o = Object.create(null);

// o = {};
// // ===
// o = Object.create(Object.prototype);

// o = Object.create(Object.prototype, {
//   foo: { writable: true, configurable: true, value: 'hi' },
//   bar: {
//     configurable: false,
//     get: function () { return 10; },
//     set: function (value) { console.log('Установка o.bar в', value); }
//   }
// })

// function Constructor() {
//   o = new Constructor();
//   // ===
//   o = Object.create(Constructor.prototype);

//   o = Object.create({}, { p: { value: 42 } });
// }

// // Object.prototype.hasOwnProperty()
// let foo = {
//   hasOwnProperty: function () {
//     return false;
//   },
//   bar: 'Тут драконы'
// };

// foo.hasOwnProperty('bar');

// ({}).hasOwnProperty.call(foo, 'bar');

// Object.prototype.hasOwnProperty.call(foo, 'bar');

// // Самоархивирующийся объект
// function Archiver() {
//   let temperature = null,
//     archive = [];

//   Object.defineProperty(this, 'temperature', {
//     get: function () {
//       console.log('get!');
//       return temperature;
//     },
//     set: function (value) {
//       temperature = value;
//       archive.push({ val: temperature });
//     }
//   });
//   this.getArchive = function () { return archive; };
// }

// let arc = new Archiver();
// arc.temperature;
// arc.temperature = 11;
// arc.temperature = 13;
// arc.getArchive();

// // Object.keys
// let arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr));

// let obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj));

// let an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(an_obj));

// let my_obj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
// my_obj.foo = 1;

// console.log(Object.keys(my_obj));

// // getOwnPropertyNames()
// let arr1 = ['a', 'b', 'c'];
// console.log(Object.getOwnPropertyNames(arr1).sort());

// let obj1 = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.getOwnPropertyNames(obj1));


// Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
//   console.log(val + ' -> ' + obj[val]);
// });

// let my_obj = Object.create({}, {
//   getFoo: {
//     value: function () { return this.foo; },
//     enumerable: false
//   }
// });

// my_obj.foo = 1;
// console.log(Object.getOwnPropertyNames(my_obj).sort());

// // Array.prototype.filter()
// let target = myObject,
//   enum_and_nonenum = Object.getOwnPropertyNames(target),
//   enum_only = Object.keys(target),
//   nonenum_only = enum_and_nonenum.filter(function (key) {
//     let indeInEnum = enum_only.indexOf(key);
//     if (indexInEnum == -1) {
//       return true;
//     } else {
//       return false;
//     }
//   });

// console.log(nonenum_only);


// 'use strict'

// // Class declaration
// // class Rectangle {
// //   constructor(height, width) {
// //     this.height = height;
// //     this.width = width;
// //   }
// // }

// // Class expression(Безымянный)
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log(Rectangle.name);

// // Именованный
// let Rectangle1 = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log(Rectangle1.name);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = 'Точка';
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// p1.displayName; //undefined
// p1.distance;    //undefined
// p2.displayName; //undefined
// p2.distance;    //undefined

// console.log(Point.displayName);
// console.log(p1, p2);

// class BaseClass {
//   msg = 'hello world';
//   basePublicMethod() {
//     return this.msg;
//   }
// }

// class SubClass extends BaseClass {
//   subPublicMethod() {
//     return super.basePublicMethod();
//   }
// }

// // const instance = new SubClass();
// // console.log(instance.subPublicMethod());

// class ClassWithGetSet {
//   #msg = 'hello world';
//   get msg() {
//     return this.#msg;
//   }
//   set msg(x) {
//     this.#msg = `hello ${x}`;
//   }
// }

// const instance = new ClassWithGetSet();
// console.log(instance.msg);

// instance.msg = 'cake';
// console.log(instance.msg);

// // class Animal {

// //   constructor(name) {
// //     this.name = name;
// //   }

// //   speak() {
// //     console.log(`${this.name} издаёт звук.`);
// //   }
// // }

// // class Dog extends Animal {

// //   constructor(name) {
// //     super(name)
// //   }

// //   speak() {
// //     console.log(`${this.name} лает`);
// //   }
// // }

// // let d = new Dog('Митци');
// // d.speak();

// // function Animal(name) {
// //   this.name = name;
// // }

// // Animal.prototype.speak = function () {
// //   console.log(`${this.name} издаёт звук`);
// // }

// // class Dog extends Animal {
// //   speak() {
// //     console.log(`${this.name} лает`);
// //   }
// // }

// // let d = new Dog('Митци');
// // d.speak();

// let Animal = {
//   speak() {
//     console.log(`${this.name} издаёт звук`);
//   }
// };

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.setPropertyOf(Dog.prototype, Animal);

// let d = new Dog('Митци');
// d.speak();

// class MyArray extends Array {
//   static get [Symbol.species]() { return Array; }
// }

// let a = new MyArray(1, 2, 3),
//   mapped = a.map(x => x * x);

// console.log(mapped instanceof MyArray);  // false
// console.log(mapped instanceof Array);  // true

// let calculatorMixin = Base => class extends Base {
//   calc() { }
// },
//   randomizerMixin = Base => class extends Base {
//     randomize() { }
//   };

// class Foo { }

// class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

// XMLHttpRequest()
// function XMLHttpRequest() {
//   console.log(this.responseText);
// }

// let oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.open("get", "yourFile.txt", true);
// oReq.send();

// XMLHttpRequest.overrideMimeType()
// let oReq = new XMLHttpRequest();
// oReq.open("GET", url, true);

// oReq.overrideMimeType("text/plain; charset=x-user-defined");

// // responseType
// let oReq = new XMLHttpRequest();

// oReq.open("GET", url, true);
// oReq.responseType = "arraybuffer";
// oReq.onload = function (e) {
//   let arraybuffer = oReq.response;
// }

// oReq.send();

// ProgressEvent
// let oReq = new XMLHttpRequest();

// oReq.addEventListener("progress", updateProgress, false);
// oReq.addEventListener("load", transferComplete, false);
// oReq.addEventListener("error", transferFailed, false);
// oReq.addEventListener("abort", transferCanceled, false);

// oReq.open();

// состояние передачи от сервера к клиенту (загрузка)
// function updateProgress(onEvent) {
//   if (onEvent.lengthComputable) {
//     let percentComplete = oEvent.loaded / oEvent.total;
//     // ..........
//   } else {
//     // Невозможно вычислить состояние загрузки, так как размер неизвестен
//   }
// }

// function transferComplete(evt) {
//   alert("Загрузка завершена.");
// }

// function transferFailed(evt) {
//   alert("При загрузке файла произошла ошибка");
// }

// function transferCanceled(evt) {
//   alert("Пользователь отменил загрузку.");
// }

// req.addEventListener("loaded", loadEnd, false);

// function loadEnd(e) {
//   alert("Передача данных завершена(но мы незнаем успешно ли).")
// }

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
  let superHeroesText = request.response,
    superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

let myJSON = { "name": "Chris", "age": "38" },
  myString = JSON.stringify(myJSON);