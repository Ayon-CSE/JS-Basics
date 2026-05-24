function multiply(num) {
    return num * 5;
}

multiply.power = 2;

console.log(multiply(3));
console.log(multiply.power);
console.log(multiply.prototype); // {} (empty object)

function createUser(username, score) {
  this.username = username; /// this.username = variable, username = parameter / argument
  this.score = score;
} 

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printScore = function () {
    console.log(`Score is ${this.score}`);
}

let user1 = new createUser("Ayon", 69);
let user2 = new createUser("Ayon", 45);

user1.increment();// 70
user1.printScore();

/*
new keyword used to ->
The 'new' object is created. The new keyword creates a new empty object.

The this keyword is set to point to the new object.

The new object is linked to a prototype. The new object is linked to the prototype of the constructor function.


The constructor function is executed, and the new object is returned. 

*/