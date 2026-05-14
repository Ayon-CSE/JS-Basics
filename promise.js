let promise1 = new Promise(function (resolve, reject) {
  // Do an aynchronous task, then call resolve or reject
  // DB calls, cryptography, network calls

  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); // connect to then() method
  }, 1000);
});

promise1.then(function () {
  console.log("Promise is resolved");
});

// or
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 is resolved");
});

// data nibo and use korbo
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ayon", email: "ayon@gmail.com" }); // data er object niye resolve korlam
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

// perfect template for promise

let promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Ayon", password: "12345" });
    } else {
      // error thakle reject korbo
      reject("Error: Something went wrong");
    }
  }, 2000);
});

promise4
  .then(function (user) {
    console.log(user);
    return user.username; // then() method er moddhe return korlam username, next then() method e seta pabo
  })
  .then(function (username) {
    console.log("Username is:", username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise is either resolved or rejected");
  });

let promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Mishkat", password: "12345" });
    } else {
      // error thakle reject korbo
      reject("Error: JS went wrong");
    }
  }, 3000);
});

async function consumePromise5() {
  try {
    let response = await promise5; // await keyword diye promise5 er response pabo, jodi resolve hoy
    console.log(response);
  } catch (error) {
    console.log(error); // jodi reject hoy, tahole error catch korbo
  }
}

consumePromise5();

async function getAllUsers() {
  try {
    let response = await fetch("https://api.github.com/users/Ayon-CSE");
    let data = await response.json(); // response ke JSON format e convert korbo, jate data ke easily access korte pari // ektu time nite pare convert hote, tai await use kora hoy
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

getAllUsers();

// or

// Note: Token is stored in .env file (not committed to git for security)
const token = process.env.GITHUB_TOKEN || "YOUR_TOKEN_HERE"; // Load from .env file

fetch("https://api.github.com/users/Ayon-CSE", {
  headers: {
    Authorization: `token ${token}`,
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error fetching data:", error);
  })
  .finally(function () {
    console.log("Fetch operation completed");
  });
