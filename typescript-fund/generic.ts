// Example of using 'any'
// const getter = (data: any): any => data;

// Using of generic type
// ES6 syntax
// const getter = <T>(data: T): T => data;

// ES5 syntax
// function getter<T>(data: T): T {
//   return data;
// }

// Multiple generic types
class User2<T, K> {
  constructor(public name: T, public age: K) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

const yauhen2 = new User2('Yauhen', '31');
const max = new User2(123, 321);
const leo = new User2('Leo', 22);

yauhen2.getPass();
max.getPass();
leo.getPass();