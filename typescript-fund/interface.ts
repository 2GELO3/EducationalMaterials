// Simple interface example
// Interface & Type
// interface User {
//   name: string,
//   age: number,
// }

// type User2 {
//   name: string,
//   age: number,
// }

interface User {
  readonly name: string,
  age: number,
  [propName: string]: any,
  getPass(): string,
}

const yauhen: User = {
  name: 'Yauhen',
  age: 31,
  nickName: 'GELO',
  justTest: 'test',

  getPass() {
    return `${this.name}${this.age}`;
  }
}

yauhen.age = 30;
// yauhen.name = 'Max'    Error

// Interface extends
interface Admin extends User {
  getPass(): string,
}

class Yauhen implements Admin {
  name: string = 'Yauhen';
  age: number = 31;

  getPass() {
    return `${this.name}${this.age}`;
  }
}

