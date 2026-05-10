const userEmail = "ayon@gmail.com"; // true

if (userEmail) {
    console.log("You have an email");
}
else {
    console.log("Please provide an email");
}

if(!userEmail) {
    console.log("Please provide an email");
}

const obj = {}
if (!Object.keys(obj).length) {
    console.log("Object is Empty");
}
// Interview question: What are truthy and falsy values in JavaScript?
// empty array [] = true
/// empty string = false
// empty object {} = true
/// empty function () {} = true
// 0 = false
// -0 = false
// "0" = true
// 'false' or "false" = true
// " " = true
// false == 0 // true
// false === 0 // false // strict equality operatorchecks for both value and type. Since false is a boolean and 0 is a number, they are not strictly equal.
// false == ' ' // true
// false == " " // true
// 0 == ' ' // true
// 0 == " " // true
// BigInt-0n = false
// null = false
// undefined = false
// NaN = false
// all other values are truthy
// truthy and falsy values are important in control flow statements like if, while, etc. They help us to determine the flow of our program based on the conditions we set. Understanding which values are considered truthy or falsy can help us write more efficient and cleaner code.