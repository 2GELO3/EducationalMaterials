// Just example of functionality
// const SECRET: string = '123321';
// const PI: number = 3.14;

// const getPass = (name: string, age: number): string => `${name}${age}`;

// const isEmpty = <T>(data: T): boolean => !data;

// ES5 Module
(function () {
  const SECRET: string = '123321';
  const PI: number = 3.14;

  const getPass = (name: string, age: number): string => `${name}${age}`;

  const isEmpty = <T>(data: T): boolean => !data;
}());

// Define namespace
// Call namespace method
// Export data from Namespace
namespace Utils {
  export const SECRET: string = '123321';
  const PI: number = 3.14;

  export const getPass = (name: string, age: number): string => `${name}${age}`;

  export const isEmpty = <T>(data: T): boolean => !data;
};

// Try to call method outside namespace
// Calling exported from namespace methods
const myPass = Utils.getPass('Yauhen', 31);
const isSecret = Utils.isEmpty(Utils.SECRET);

// Constant with the same name outside namespace
const PI = 3;