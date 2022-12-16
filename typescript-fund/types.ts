// Array Type
let list: number[] = [1, 2, 3];

let list1: Array<number> = [1, 2, 3]; // Generic type


// Tuple Type
// Multiple lines
let x: [string, number];
x = ["hello", 10];

// One line
// let y: [string, number] = ["goodbuy", 42];


// Any Type
// Any type for array
let y: [any, any] = ["goodbuy", 42];
let z: Array<any> = [10, "hello"];

// Any type for string
let notSure: any = false;

// Issue case (no error)
notSure = true;
notSure = 42;
notSure = "hello";


// Enum Type
enum Directions {
  Up,
  Down,
  Left,
  Right
}

Directions.Up;
Directions.Down;
Directions.Left;
Directions.Right;


// Never Type
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
  throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
  while (true) {}
};


// Object Type
const create = (o: object | null): void => { };

// create(1);
// create('42');
// create({obj: 1});

// let id: number | string;

// id = 10;
// id = '42';
// id = true;


// Type
type Name = string;

let id: Name;

// id = "42";
// id = 10;