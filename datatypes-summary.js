const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id === anotherid); // false

/// object
const heros = ["Superman", "Batman", "ayon"];

/// Object
let myObj = {
    name: "Ayon",
    age: 24,
    isMarried: false,
    hobbies: ["Coding", "Gaming", "Cooking"]
}

/// functions

const fun = function () {
    console.log("This is a function");
}

console.log(typeof myObj); // object

fun();

// +++++++++++++++++++++++++++++++++++++

// stack(Primitive), Heap(Non-Primitive)
/// heap
let user = {
    email: "Ayon@gmail.com"
};

let user2 = user; // user2 is a reference to the same object in memory

user2.email = "mishkat@gmail.com";

console.log(user.email); 
console.log(user2.email); 


