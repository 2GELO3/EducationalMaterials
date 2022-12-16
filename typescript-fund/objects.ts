// Simple object example
// Object type using any
let user1: any = {
  name: 'Yauhen',
  age: 30,
};

user1 = 'test';

// Define object type
// let user: {name: string, age: number} = {
//   name: 'Yauhen',
//   age: 30,
// };

// New admin object
// let admin: {name: string, age: number, nickName: string} = {
//   name: 'Max',
//   age: 20,
//   nickName: 'Mad',
// };

// Using Type for objects structure
type Person = {name: string, age: number, nickName?: string, getPass?: () => string};

// Apply Person type for objects with the same structure
let user: Person = {
  name: 'Yauhen',
  age: 30,
  nickName: 'webDev',
};

let admin: Person = {
  name: 'Max',
  age: 20,
  nickName: 'Mad',
  getPass(): string {
    return `${this.name} ${this.age}`
  }
};