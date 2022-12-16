// Base structure of Decorator
// const logClass = () => {};


// 1. Class Decorator
const logClass = (constructor: Function) => {
  console.log(constructor);
};

// @logClass
// class User {
//   constructor(public name: string, public age: number) {}

//   public getPass(): string {
//     return `${this.name}${this.age}`;
//   }
// }


// 2. Property Decorator
const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log(propertyKey);
};

// class User {

  // @logProperty
  // secret: number;

  //   constructor(public name: string, public age: number) {}

  // public getPass(): string {
  //   return `${this.name}${this.age}`;
  // }
// }


// 3. Method Decorator
const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey);
};

// class User {

  //   constructor(public name: string, public age: number) {}

  // @logMethod
  // public getPass(): string {
  //   return `${this.name}${this.age}`;
  // }

// }


//  4. Accessor get/set Decorator
const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey);
};

// class User {

  //   constructor(public name: string, public age: number) {}

  // @logSet
  // set myAge(age: number) {
    // this.age = age;
  // }

// }


// Factory Decorator
function factory(value: any) {
  return function (target: any) {
    console.log(target);
  }
}

// Applying Factory Decorator
const enumerable = (value: boolean) => {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.enumerable = value;
  };
}

// class User {

  // constructor(public name: string, public age: number) {}

  // @enumerable(false)
  // public getPass(): string {
  //   return `${this.name}${this.age}`;
  // }

// }

// Decorator composition syntax
// Apply decorators (one line)
// @f @g x

// Apply decorators (multiple lines)
// @f
// @g
// x


// Example of two factory decorators
const first = () => {
  console.log('first() completing');
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log('first() called');
  };
}

const second = () => {
  console.log('second() completing');
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log('second() called');
  };
}

// class User {

  // constructor(public name: string, public age: number) {}

  // @first()
  // @second()
  // public getPass(): string {
  //   return `${this.name}${this.age}`;
  // }

// }
