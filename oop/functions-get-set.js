// old style getter-setter

function User(email, password) {
    this.email = email;
    this.password = password;

    Object.defineProperty(this, 'password1', {
        get: function () {
            return this.password.toString().replace(/./g, '*');
        },

        set: function (value) {
            this.password = value;
        }
    })
}


let user1 = new User('ayon@gmail.com', '123');
console.log(user1.password1); // ***
console.log(user1.password); // 123

