class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`My username is ${this.username}`);
    }

    static createId() {// static disi keu access korte parbe na, static method e this keyword use kora jabe na, karon static method class er instance er sathe related na, static method class er sathe related
    
        return 123;
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
}

let user1 = new User("Ayon");
console.log(user1);
// console.log(user1.createId());

let teacher1 = new Teacher("Mishkat", "mishkat@gmail.com", '123');
console.log(teacher1);
console.log(teacher1.createId());