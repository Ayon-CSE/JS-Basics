let User = {
    email: 'ayon@gmail.com',
    password: '123',

    get password1() {
        return this.password.toString().replace(/./g, '*');
    },   

    set password1(value) {
        this.password = value;
    }
}

 let user1 = Object.create(User);
 console.log(user1.password1); // ***
 console.log(user1.password); // 123
