// Function example
// const createPassword = (name: string, age: number | string) => `${name} ${age}`;

// createPassword('Jack', 31);

// Function with optional argument 'age'
// const createPassword = (name: string, age?: number) => `${name} ${age}`;

// createPassword('Jack');

// Default Arguments
const createPassword = (name: string = 'Max', age: number | string = 20) => `${name} ${age}`;

createPassword();

// Void
// const greetUser: void = () => {
//   alert("Hello, nice to see you");
// };

// Never Type
// Function return Error
// const msg = "hello";
// const error = (msg: string): never => {
//   throw new Error(msg);
// };

// Function infinite loop
// const infiniteLoop = (): never => {
//   while (true) {}
// };

// Function variable type
// let myFunc;

// function oldFunc(name: string):void {
//   alert(`Hello ${name}, nice to see you!`);
// };

// myFunc = oldFunc;

// Describe function type
let myFunc: (firstArg: string) => void;

function oldFunc(name: string):void {
  alert(`Hello ${name}, nice to see you!`)
};

myFunc = oldFunc;
