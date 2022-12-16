// Simple class example
// Class types
class User {
  public name: string;
  protected age: number;
  private nickName: string;
  readonly pass: number;

  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass;
  }
}

const oleg = new User('Oleg', 21, 'GELO', 123);

oleg;

// Minimization of Class properties
class User2 {
  constructor(
    public name: string,
    public age: number,
    public nickName: string,
    public pass: number
  ) {}
}

// Try to change private property
// class User3 {
//   private age: number = 20;

//   constructor(public name: string) {}
// }

// const yauhen = new User3('Yauhen');

// yauhen.age = 30;

// Get access to private property
class User3 {
  private age: number = 20;

  constructor(public name: string) {}

  setAge(age: number) {
    this.age = age;
  }

  set myAge(age: number) {
    this.age = age;
  }
}

const yauhen = new User3('Yauhen');

yauhen.setAge(30);
yauhen.myAge = 31;