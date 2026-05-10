const a = ["a", "b", "c"];
const b = [1, 2, 3];
// a.push(b); // add array b to the end of array a as an element
// console.log(a);

const c = a.concat(b); // concatenate array a and b into a new array c, cant modify original arrays
console.log(c); // ["a", "b", "c", 1, 2, 3]

const d = [...a, ...b]; // spread operator to concatenate array a and b into a new array d, cant modify original arrays
console.log(d); // ["a", "b", "c", 1, 2, 3]

const e = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const f = e.flat(Infinity); // flat() method to flatten the array by one level
console.log(f); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

Array.isArray(e); // check if e is an array
console.log(Array.isArray(e)); // true
console.log(Array.from("Ayon")); // ["A", "y", "o", "n"] - convert string to array of characters
console.log(Array.from(1234)); // [] - convert number to array, returns empty array because numbers are not iterable

console.log(Array.from({ name: "Ayon" })); // [] - convert object to array, returns empty array because objects are not iterable

let num = 1, num2 = 2, num3 = 3;
console.log(Array.of(num, num2, num3)); // [1, 2, 3] - create an array from a list of arguments
