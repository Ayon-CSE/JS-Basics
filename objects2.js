const tinderuser2 = new Object();// singleton object created using Object constructor
const tinderuser = {}; // non singleton object created using object literal syntax

tinderuser.id = "123abc";
tinderuser.name = "Ayon";

console.log(tinderuser); // {} - empty object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Ayon",
            lastname: "Das"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // Ayon

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 1: "a", 2: "b" };
// const obj3 = { obj1, obj2 };
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2);
//          target, source
const obj3 = { ...obj1, ...obj2 }; // spread operator to merge obj1 and obj2 into obj3
console.log(obj3); // { '1': 'a', '2': 'b' }

const users = [
    {
        id: 1,
        email : "h@gmail.com"
    }, 
    {
        id: 2,
        email : "g.gmail.com"
    }
]

// array er vitore object
console.log(users[0].email); // h@gmail.com

// onject theke key, value niye asha
console.log(Object.keys(tinderuser)); // [ 'id', 'name' ]
console.log(Object.values(tinderuser)); // [ '123abc', 'Ayon' ]
console.log(Object.entries(tinderuser)); // [ [ 'id', '123abc' ], [ 'name', 'Ayon' ] ]

/// onkect er vitor ei property ache kina check kora
console.log(tinderuser.hasOwnProperty("name")); // true
console.log(tinderuser.hasOwnProperty("ulala")); // false


const course = {
    courseName: "JS Bootcamp",
    price: "999",
    courseInstructor : "Ayon"
}

// course.courseInstructor;
const { courseInstructor:x } = course; // object destructuring // object theke courseInstructor key er value niye asha and x variable e store kora
console.log(x);// Ayon



