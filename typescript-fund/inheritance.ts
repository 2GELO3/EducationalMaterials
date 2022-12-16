// Class with static property
// Call static property in class method
class User4 {
  private nickName: string = 'GELO';
  static secret = 12345;

  constructor(public name: string, public age: number) {}

  getPass(): string {
    return `${this.name}${User4.secret}`;
  }
}

// Example of call static property
// User4.secret

// const yauhen2 = new User4('Yauhen', 30);

// yauhen2.getPass();


// class Yauhen extends User4 {
//   name: string = 'Yauhen';
// }

// Create instances based on 'User4' and 'Yauhen' classes
const max = new User4('Max', 20);
// const yauhen2 = new Yauhen(31);


// Realization of constructor in the inherited class
// class Yauhen2 extends User4 {
//   name: string = 'Yauhen';

//   constructor(age: number) {
//     super(name, age);
//   }

//   getPass(): string {
//     return `${this.age}${this.name}${User4.secret}`;
//   }
// }

// No error
// Create instances based on 'User4' and 'Yauhen' classes
const max2 = new User4('Max', 20);
// const yauhen2 = new Yauhen(31);
// Yauhen2.getPass();

// Abstract class example
abstract class User5 {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(this.name);
  }

  abstract getPass(): string;
}

// const max3 = new User5('Max', 20);