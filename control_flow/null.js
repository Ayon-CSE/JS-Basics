console.log(2 <= 2);

console.log(2 == "2"); // true // loose equality operator checks for value only, it performs type coercion if necessary
console.log(2 === "2"); // false // strict equality operator checks for both value and type

let a = 5, b = 5;
if (a && b) {
    console.log("YES");
}

a = 5, b = 0;
if (a || b) {
    console.log("YES");
}

// Nullish Coalescing Operator (??) : 
// null undefined check

let val1;
val1 = 5 ?? 10; // 5 // if val1 is null or undefined, it will take the value of 10, otherwise it will take the value of 5
console.log(val1); 

val1 = null ?? 10; // 10
console.log(val1);

val1 = undefined ?? 10; // 10

val1 = null ?? undefined ?? 10; // 10

val1 = null ?? undefined ?? 10 ?? 20; // 10

// Ternaru Operator 
// (condition ? True : False)

const age = 18;
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);

