const user = {
  username: "Ayon",
  price: 1000,
  welcomeMessage: function () {
    console.log(`Welcome, ${this.username}! Your price is ${this.price}.`);
    // this refers to the current user object, allowing us to access its properties
    console.log(this); // shows all properties of the user object
  },
};

user.welcomeMessage(); // Welcome, Ayon! Your price is 1000.
user.username = "Mishkat";
user.price = 2000;
user.welcomeMessage(); // Welcome, Mishkat! Your price is 2000.

console.log(this); // In the global scope, this refers to the global object (window in browsers)

function chai() {
  let username = "Ayon";
  console.log(this.username); // this function e kaj kore na, object e kaj kore, tai this.username undefined dibe
}

chai();

const chai2 = function () {
  let username = "Ayon";
  console.log(this.username); // this function e kaj kore na, object e kaj kore, tai this.username undefined dibe
};

/// arrow function
const chai3 = () => {
  let username = "Ayon";
  console.log(this.username); // this function e kaj kore na, object e kaj kore, tai this.username undefined dibe
};

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(5, 10)); // 15

/// implicit return in arrow function
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(2, 3, 4)); // 9

const fun = () => ({
    username: "Ayon",
});

fun();
