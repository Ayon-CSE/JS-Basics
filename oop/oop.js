let user = {
  username: "ayon",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username : ${this.username}`);
    console.log(this);
  }
};

console.log(user.username); // "ayon"
console.log(user.getUserDetails()); // "Got user details from database"
console.log(this); // global object (window in browsers)

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Hello ${this.username}, welcome back!`);
    }

    return this;
}

let user1 = new User("Ayon", 69, true);
// let user2 = User("Ayon2", 420, false);
// overwrite user1 // user1 and user2 are the same object because we are not using new keyword, so this is not creating a new object, instead it is modifying the existing object and returning it, so user1 and user2 are the same object
let user2 = new User("Ayon2", 420, false);
console.log(user1);  
console.log(user2);  

console.log(user1.constructor); // User function

