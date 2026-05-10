// singleton objects


// object literals
const mySym = Symbol("Key1");
const user = {
    name: "Ayon",
    "full-name": "Ayon Das Gupta",
    [mySym]: "Value of Symbol Key",
    age: 26,
    email : "ayon@gmail.com",
    isMarried: false,
    hobbies: ["Coding", "Gaming", "Cooking"],
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"]
}; // empty object literal

console.log(user.lastLoginDays); // ["Monday", "Tuesday", "Wednesday"]
console.log(user["lastLoginDays"]); // ["Monday", "Tuesday", "Wednesday"]
// console.log(user.full - name); // SyntaxError: Unexpected token '-'
console.log(user["full-name"]); // "Ayon Das Gupta"
console.log(user[mySym]); // "Value of Symbol Key"

user.name = "Mishkat"; // update the value of name property
console.log(user); 

// if dont change any property of user
// Object.freeze(user); // freeze the object to prevent any changes to it
user.name = "Ayon"; // this will not change the name property because the object is frozen
console.log(user); // { name: "Mishkat", "full-name": "Ayon Das Gupta", [Symbol(Key1)]: "Value of Symbol Key", age: 26, email: "

// add function to user
user.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}// this refers to the object that is calling the function, in this case user

console.log(user.greet); // [Function: greet]
console.log(user.greet()); // Hello, my name is Ayon

