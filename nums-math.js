const score = 100;
console.log(score); // 100
const balance = new Number(100);
console.log(balance); // 100

console.log(balance.toString()); // "100"
console.log(balance.toString().length); // 3"

console.log(balance.toFixed(4));// "100.0000"

const num = 123.456789;
console.log(num.toPrecision(5)); // "123.46" (5 significant digits)
console.log(num.toPrecision(3)); // "123" (3 significant digits)
console.log(num.toPrecision(4)); // "123.5" (4 significant digits)


const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // "1,000,000"

/// +++++++++++ Maths ++++++++++++++
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 2, 5, 10)); // 2
console.log(Math.max(4, 2, 5, 10)); // 10
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 100); // random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // random integer between 0 and 99

const min = 10;
const max = 20;
const randomNum2 = Math.random() * (max - min); // random number between 0 and 10 (max - min)
const randomNum = Math.random() * (max - min) + min; // random number between 10 and 20
console.log(Math.floor(randomNum + 1)); // random integer between 10 and 20 (inclusive)
// why +1? because Math.floor rounds down, so to include 20 we need to add 1 to the max value before flooring. if i not use +1, the max value will be 19.9999 and flooring it will give us 19, which is not what we want.
