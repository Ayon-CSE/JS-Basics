const accountId = 12;
let accountEmail = "ayon@gmail.com";
var accountPassword = "12345";
accountCity = "Dhaka";
accountCountry = "Bangladesh";

/// accountId = 5; // TypeError: Assignment to constant variable.

accountEmail = "dipta@gmail.com";
accountPassword = "54321";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountCountry]);

