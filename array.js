const a = [1, 2, 3, 4, 5, true, "Ayon", [1, 2, 3], { name: "Ayon" }];
console.log(a[0]); // 1
console.log(a[6]); // "Ayon"
console.log(a[7]); // [1, 2, 3]
console.log(a[8]); // { name: "Ayon" }

const a2 = new Array(1, 2, 3, 4, 5);
console.log(a2); // [1, 2, 3, 4, 5]
console.log(a2.length); // 5

// Array methods
a2.push(6); // add 6 to the end of the array
console.log(a2); // [1, 2, 3, 4, 5, 6]
a2.pop(); // remove the last element of the array
console.log(a2); // [1, 2, 3, 4, 5]
a2.unshift(0); // add 0 to the beginning of the array
console.log(a2); // [0, 1, 2, 3, 4, 5]
a2.shift(); // remove the first element of the array             
console.log(a2); // [1, 2, 3, 4, 5]

console.log(a2.includes(10) ); // false
console.log(a2.includes(3) ); // true

console.log(a2.indexOf(3)); // 2             
console.log(a2.indexOf(10)); // -1 (not found)

const A = a2.join(); // join all elements of the array into a string, separated by commas
console.log(a2); // "1,2,3,4,5"
console.log(A); // "1,2,3,4,5"

// slice vs splice
const a3 = [1, 2, 3, 4, 5];
const sliced = a3.slice(1, 4); // slice(start, end) - returns a new array from index start to end-1
console.log(a3); // [1, 2, 3, 4, 5] original array is not modified
console.log(sliced); // [2, 3, 4]

const spliced = a3.splice(1, 3); // splice manipulates the original array, splice takes end also but it removes the elements from the original array and returns the removed elements as a new array
console.log(a3); // [1, 5] original array is modified
console.log(spliced); // [2, 3, 4]

