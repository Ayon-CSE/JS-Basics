/// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

let user1 = new User("Ayon", "ayon@gmail.com", '123456');
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername());


/// behind the scene
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}               

user.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}   

let user2 = new user("Ayon", "ayon@gmail.com", '123456');
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUsername());