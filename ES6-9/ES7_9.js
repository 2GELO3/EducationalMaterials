// .entries() for Object

// const user = {
//   firstName: 'Oleg',
//   lastName: 'Vasilevsky',
// };

Object.entries(user);

// .entries() for Array

const name = ['O', 'l', 'e', 'g'];

Object.entries(name);

// .entries() ignore Symbol key:

// const admin = {
//   [Symbol('password')]: '123pass',
//   name: 'Oleg'
// }

Object.entries(admin)

// .fromEntries() using:

const arr = [['one', 1], ['two', 2], ['three', 3]];

Object.fromEntries(arr);

// .values() using: (Данный метод используется чаще всего, если нужно вытянуть необходимое значение из объекта)

// const user = {
//   firstName: 'Oleg',
//   lastName: 'Vasilevsky',
// };

Object.values(user);

/////////////////////////////

// Base object with properties, get and set:

const person = {
  name: 'Max',
  age: 30,
  set personName(name) {
    this.name = name;
  },
  get password() {
    return `${this.name}${this.age}`;
  },
};


console.log(person);
console.log(person.password);

// Get property descriptors:

console.log(Object.getOwnPropertyDescriptors(person));

// Clone object:

// Using assign()

// const admin = Object.assign({}, person);

// Using destructuring

const admin = { ...person };

console.log(admin);

console.log(Object.getOwnPropertyDescriptors(admin));

// Clone object by using getOwnPropertyDescriptors():

const superAdmin = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person))

console.log(Object.getOwnPropertyDescriptors(superAdmin));

///////////////////////////////

// Trailing commas & exponentiation operator(syntactic sugar)



// Math.pow();
Math.pow(7, 2)

// Exponentiation operator

7 ** 2
5 ** 3
2 ** 4

// Complecated math operation
// Old

Math.pow(7, 2) + Math.pow(5, 3) / Math.pow(2, 4);

// New version

7 ** 2 + 5 ** 3 / 2 ** 4;

// New version with braces:
(7 ** 2) + (5 ** 3) / (2 ** 4);

// The same changes, but with trailing commas:

const user = {
  firstName: "Oleg",
  lastName: "Vasilevsky",
  age: 21,
};

function Person(
  name,
  age,
  city,
) {
  this.name = name;
  this.age = age;
  this.city = city;
}

//////////////////////////////

// Async Functions(Async Await)

// Base async function:

// const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

// const showText = async () => {
//   const fetcedText = await fetchText();
//   console.log(`This is a feature of ${fetchedText}`);
// };

// showText();

// Work sync with async functionally:

// const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

// const showText = () => {
//   const fetcedText = fetchText();
//   console.log(`This is a feature of ${fetchedText}`);
// };

// showText();

// Async function always return Promise
// We can handle result:

// const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

// const showText = async () => {
//   const fetcedText = await fetchText();
//   console.log(`This is a feature of ${fetchedText}`);
// };

// If async function return simple value
// this value still be in Promise

// console.log(showText());

// showText().then(data => console.log(data));

// Parallel execute of async functions:

const showText = async () => {
  const [fetchedDescrText, fetchedEsText] = await Promise.all([fetchDescrText(), fetchEsText()]);
  return `${fetchedDescrText} ${fetchedEsText}`;
}

// Receive result after ~2000ms

showText().then(data => console.log(data));

//////////////////////////////

// Error handling with 'try/catch':

// const textNothing = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

// const textAll = async () => {
//   try {
//     const fethedText = await textNothing();
//     console.log(`This is a feature of ${fethedText}`);
//   } catch (e) {
//     console.log(e);
//   }
// }

// showText();

// Using 'fynally' as a 3rd step of 'try/catch:

const textNothing = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const textAll = async () => {
  try {
    const fethedText = await textNothing();
    console.log(`This is a feature of ${fethedText}`);
  } catch {
    console.log("Something going wrong...");
  } finally {
    showSpiner = false;
  }
}

showText();

///////////////////////////////////////

// Base Array

const arrs = [1, 2, 3, 4, 'five', NaN];

// Find element using .indexOf:

if (arrs.indexOf(3) >= 0) {
  console.log(true);
}

// Find element using .includes

if (arrs.includes(3)) {
  console.log(true);
}

// Find NaN in Array:

const index = arr.findIndex(Number.isNaN);
console.log(index);

// Difference in finding NaN in Array:

arr.indexOf(NaN);
arr.includes(NaN);

// .flat() of 1st level:

const arr1 = [1, 2, [3, 4]];
arr1.flat();

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr1.flat();

// .flat() of 2nd level:

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr1.flat(2);

// .flat() of Infinity level:

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);

// .flat() remove empty values:

const arr5 = [1, 2, , 4, 5];
arr5.flat();

// .flat() remove empty values from 1st & 2nd levels of Array:

const arr6 = [1, 2, , 4, 5, [6, , 8]];
arr6.flat();

// Using of .flatMap():
const arr7 = [[1], [2], [3], [4]]
arr7.flatMap(x => [x * 2]);

// Base Array (iterable instance):

// const names = ['Jack', 'Max', 'Leo'];

// 'for-of' iteration:
// for (let name of names) {
//   console.log(name);
// }

// Base async Array:

const names = [
  new Promise(resolve => resolve('Jack')),
  new Promise(resolve => resolve('Max')),
  new Promise(resolve => resolve('Leo')),
];

// Async function for iteration with 'for-of':

// const showNames = async () => {
//   for (name of names) {
//     console.log(name);
//   }
// };

// showNames();

// Async function for iteration with 'for-await-of':

const showNames = async () => {
  for await (name of names) {
    console.log(name);
  }
};

showNames();

// Async generator function:

async function* readLines(path) {
  let file = await fileOpen(path);

  try {
    while (!file.EDF) {
      yield await file.readLine();
    }
  } finally {
    await file.close();
  }
};

// Async iteration of async generator function results:

for await (const line of readLines(filePath)) {
  console.log(line);
};

///////////////////////////////////////

// Base String:

const str = "test";

// .padStart() with argument:

str.padStart(10, '~');
str.padEnd(10, '~');

// .padStart() without of argument:

str.padStart(10);
str.padEnd(10);

// Base String:

const str1 = "Hello, my name is Oleg";

// .startsWith() using:

str1.startsWith("Hello");
str1.startsWith("Hi");

// .endsWith() using:

str1.endsWith("Oleg");
str1.endsWith("Jack");

// Base String:

const str2 = "Hello, my name is Oleg";

// The resulting string after .startsWith() is "my name is Oleg":

str2.startsWith("my", 7);

// The resulting string after .startsWith() is "my name is Oleg":

str2.startsWith("name", 7);

// The resulting string after .endsWith() is "my name is Oleg":

str2.endsWith("name", 14);

// The resulting string after .endsWith() is "my name is Oleg":

str2.endsWith("name", 10);

// Base string:

const str3 = "   Just test string   ";

str3.trim();


// Base string:

const str4 = "   Just test string   ";

// Base string after .trimStart():

str4.trimStart();

// Base string after .trimEnd():

str4.trimEnd();

////////////////////////////////////

// Difference between old and new versions of 'dot' behavior:
// Old varsion:

/one.two/.test('one\ntwo');

// New version (dotAll)
// with flag /s:

/one.two/s.test('one\ntwo');

// Named Group:

// (?<name>...)

// Base RegEx to work with date:

// const regEx = /(\d{4})-(\d{2})-(\d{2})/;

// const result = regEx.exec('2019-08-23');

// console.log(result);

// RegExp with named groups - (?<name>...):

const regEx = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const result = regEx.exec('2019-08-23');

console.log(result);

console.log(result.groups);

// RegExp named groups and .replace():

const str5 = "Vasilevsky Oleg";

const repl = /(?<firstName>[A-Za-z]+) (?<lastName>[A-Za-z]+$)/u;

const newStr = str.replace(repl, '$<lastName>, $<firstName>');

console.log(newStr);

// Using named groups inside RegExp = \k<group name>:

let sameWords = /(?<fruit>apple|orange) === \k<fruit>/u;

sameWords.test('apple === apple');
sameWords.test('orange === orange');
sameWords.test('apple === orange');

// Positive lookbehind (?<=[symbol]):

/(?<=#).*/.test('#frontend');
/(?<=#).*/.test('frontend');

// Difference between old and new approaches:

'#frontend'.match(/#.*/)[0];

// New

'#frontend'.match(/(?<=#).*/)[0];

// Negative lookbehind (?>![symbol]):

'course coasts $20'.match(/(?<!\$)\d+\.?\d+/)

/////////////////////////////////////////

// Base function:

function /* just a comment */ test() { }

// Difference between old and new versions of .toString():
// Old version:

test.toString();

// New version:

test.toString();

// Define Symbol description using property description:

mySymbol.description;
mySymbol.description === 'Symbol description';

// If Symbol was created without description
// default value for property is 'undefined':

const myNewSymbol = Symbol();
myNewSymbol.description;
