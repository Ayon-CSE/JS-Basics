function add(num1, num2) {
    console.log(num1, num2);
}

let result = add(10, 20);
console.log(result); // undefined return kore karon function er vitor kono return statement nai

function add2(num1, num2) {
   return num1 + num2;
}
result = add2(10, 20);
console.log(result); 

console.log(add2()); // NaN return kore karon function er vitor num1 and num2 er kono value nai, tai undefined + undefined = NaN

function loginUserMessage(username = "mishkat") {// default parameter diye username er value set kora hoy, jodi kono value na deya hoy tahole default value use kora hobe
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `Welcome ${username}`; // welcome undefined return kore karon username er kono value nai, tai welcome undefined return kore
}

console.log(loginUserMessage()); // Please enter a username
console.log(loginUserMessage("Ayon")); // Welcome Ayon