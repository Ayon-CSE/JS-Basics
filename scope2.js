function one() {/// closure example // A closure is a function that has access to its own scope, the outer function's scope, and the global scope. In this example, the inner function `two` has access to the variable `username` defined in the outer function `one`, demonstrating a closure.
  const username = "Ayon";

  function two() {
    const website = "www.ayon.com";
    console.log(username);
  }

  two();
//   console.log(website); // ReferenceError: website is not defined
}

one();

/// other way to create a closure
const addone = function (num) {
    return num + 1;
}
console.log(addone(5)); // 6

