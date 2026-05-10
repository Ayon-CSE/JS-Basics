function calculateCartPrice(...num1) { // rest parameter // rest parameter is used to collect all the remaining arguments into an array
    return num1;
}

function calculateCartPrice2(val1, val2, ...num1) {
  // val1 and val2 are regular parameters, num1 is a rest parameter
  return num1;
}

console.log(calculateCartPrice(10, 20, 30)); // Output: [10, 20, 30] - all arguments are collected into an array
console.log(calculateCartPrice2(10, 20, 30, 40, 50));// val1 = 10, val2 = 20, num1 = [30, 40, 50]


const user = {
    username: "Ayon",
    price: 1000
}

function handleobject(anyobject) {
    return `Username is ${anyobject.username} and price is ${anyobject.price}`;
}

// console.log(handleobject(user)); // Output: Username is Ayon and price is 1000

handleobject({
    username: "Ayon",
    price: 1000
})
console.log(handleobject(user)); // Output: Username is Ayon and price is 1000

/// function er vitor array dhukabo
const arr = [100, 200, 300, 400]
function returnsecondelement(array) {
    return array[1]; // return the second element of the array
}

// console.log(returnsecondelement(arr)); // Output: 200

console.log(returnsecondelement([100, 200, 300, 400])); // Output: 200