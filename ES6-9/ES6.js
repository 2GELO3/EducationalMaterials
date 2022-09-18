// Variables

// let a = 0;
// console.log(a);

// Arrow function

let obj = {
  number: 5,
  sayNumber: function () {
    say = () => {
      console.log(this)
    }
    say();
  }
}

obj.sayNumber();

// Методы перебора map и filter

let names = ['Ivan', 'Ann', 'Voldemart'];

let shortNames = names.filter((name) => {
  return name.length < 5
})

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLLo']

answers = answers.map((item) => item.toLowerCase())

console.log(answers);

// Interpolation and default value

console.log(`User ${name}, ${age} old`);

function fetchData(data, count = 0) {
  // count = count || 0;
  console.log(`Data: ${data} in amount ${count}`);
}

fetchData('something');

// Rest operator

function max(a, b, ...numbers) {
  console.log(numbers);
}

max(3, 4, 67);


// Spread operator

const arrOne = [1, 2, 3],
  arrTwo = [43, 2, 6];

const res = Math.max(...arrOne, ...arrTwo);

console.log(res);


// ES7-8

const avatar = 'Photo';

// const user = {
//   name: 'default',
//   pass: 'qwerty',
//   rights: 'user'
// };

const admin = {
  name: 'admin',
  pass: 'root'
}

// const rest = Object.assign({}, user, admin);

const rest = { ...user, ...admin, avatar };

console.log(rest);

const x = 25, y = 10;

// const coords = {
//   x: x,
//   y: y,
//   calcSq: function () {
//     console.log(this.x * this.y);
//   }
// }

const coords = {
  x, y,
  calcSq() {
    console.log(this.x * this.y);
  }
}

coords.calcSq();


console.log(coords);

// Destructuring

// const user = {
//   name: 'default',
//   pass: 'qwerty',
//   rigths: 'user'
// };

const user = {
  name: {
    first: 'Sam',
    second: 'Smith'
  },
  pass: 'qwerty',
  rigths: 'user'
};

// const userName = user.name;
const { name: { first, second }, pass, rigths } = user;

console.log(first, second);

// Classic pattern in JS(Destructuring)

// In Object

function connect({
  host = 'localhost',
  port = 3000,
  user = 'default' } = {}) {
  console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect({
  port: 232,
})

// In Array

const numbers = [[3, 5], [6, 6]];

// const [, , c] = numbers;

cosnt[[a, b], [c, d]] = numbers;

console.log(a, b, c, d);

// Real example

const country = {
  name: 'England',
  population: 2000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%']
  }
}

const { gender: { male: [maleUnder18, maleAdult], female: [femUnder18, femAdult] } } = country;

console.log(maleUnder18, femAdult);