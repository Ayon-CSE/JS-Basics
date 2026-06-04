class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password1() {
        return this.password.toString().replace(/./g, '*');
    }// password1 new variable nisi jate stack limit cross na hoy, karon bar bar constructor call hobe same rakhle

    set password1(value) {
        this.password = value;
    } 

    get email1() {
        return this.email.toUpperCase();
    }

    set email1(value) {
        this.email = value;
    }
}

let user1 = new User('ayon@gmail.com', '123');
console.log(user1.password1); // ***
console.log(user1.password); // 123
console.log(user1.email1); // AYON@GMAIL.COM
console.log(user1.email); // ayon@gmail.com
