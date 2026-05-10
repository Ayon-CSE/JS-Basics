/// global scope
let a = 100;
/// block scope
{
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner block scope:", a);
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c);// var scope er baireo kaj kore

console.log(a); // 100