let score = "33abc";
console.log(score + "3");// 333, score is converted to string and concatenated with "3"

console.log(typeof (score));

let num = Number(score);
console.log(typeof num);
console.log(num);// NaN, not a number, because "33abc" cannot be converted to a valid number

let score2 = null;
console.log(score2);

let a = 5;
console.log(a - "3");// 2, a is converted to number and "3" is converted to number, then subtraction is performed

console.log(a + "3");// 53, a is converted to string and concatenated with "3"

// In JavaScript, there are two types of type conversion: implicit and explicit.

// Implicit type conversion (type coercion) happens when JavaScript automatically converts a value from one type to another. For example:
let x = 5;
let y = "10";
console.log(x + y); // "510", x is converted to string and concatenated with y

// Explicit type conversion (type casting) happens when you manually convert a value from one type to another using functions like Number(), String(), Boolean(), etc. For example:
let z = "20";
let numZ = Number(z);
console.log(numZ); // 20, z is explicitly converted to a number

let ok;// ok = "", false, otherwise true
let ok2 = Boolean(ok);
console.log(ok2);

// Falsy values in JavaScript are values that are considered false when evaluated in a boolean context. The falsy values are:
// "" (empty string)
// 0 (zero)
// null
// undefined
// NaN (Not a Number)
// false
// All other values are considered truthy, meaning they evaluate to true in a boolean context. For example:
// Truthy values include:
// "0" (non-empty string)
// [] (empty array) // is it true?
let arr = [];
console.log(Boolean(arr));// true, because an empty array is considered truthy in JavaScript

// {} (empty object)
// true
// 1 (non-zero number)


