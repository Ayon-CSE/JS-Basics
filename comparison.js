console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false

console.log("2" > 1); // true
console.log("02" > 1); // true
console.log("2" > "1"); // true

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

/// the reason is that, equality check === and comparison operators >, <, >=, <= work differently when it comes to null and undefined.
/// Comparisons convert null to a number, which results in 0, while equality checks do not convert null and undefined, treating them as distinct values.



console.log(null == null); // true
console.log(null === null); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
// the reason is that, null and undefined are considered equal when using the loose equality operator ==, but they are not strictly equal when using the strict equality operator ===. This is because == performs type coercion, while === does not.


console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
// the reason is that, undefined is not converted to a number in comparisons, and it is considered greater than any number, including 0. Therefore, both undefined >= 0 and undefined <= 0 evaluate to false.

// strict check === (value and type must be the same)
// loose check == (value is converted to the same type before comparison)
