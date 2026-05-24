class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`My username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // call the parent class constructor
        // super keyword e parent class er constructor ke call kora hoy, jeta User class er constructor ke call kore, jeta username parameter receive kore, tarpor this.username = username; execute hoy, jeta Teacher class er instance er username property set kore
        // teacher user er property access korte pare, but user teacher er property access korte parbe na, karon teacher user er child class, but user teacher er parent class
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`${this.username} added a course`);
    }
}

let teacher1 = new Teacher("Ayon", "ayon@gmail.com", '123456');
console.log(teacher1);
teacher1.logMe();
teacher1.addCourse();

let user1 = new User("Mishkat");
// user1.addCourse(); // error
user1.logMe(); 

console.log(teacher1 instanceof User); // true
console.log(teacher1 instanceof Teacher); // true
console.log(user1 instanceof User); // true
console.log(user1 instanceof Teacher); // false
console.log(User instanceof Teacher); // false
console.log(Teacher instanceof User); // false