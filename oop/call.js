function SetUsername(username) {
    this.username = username;
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username);
    // call method e first argument e this pass kora hoy, jeta CreateUser function er this ke refer kore, tarpor baki arguments pass kora hoy, jeta SetUsername function e username parameter e receive hoy
    this.email = email;
    this.password = password;
}

let user1 = new CreateUser("Ayon", "ayon@gmail.com", "123456");
console.log(user1); 