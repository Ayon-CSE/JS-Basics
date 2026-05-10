const arr2 = ["js", "python", "cpp"];
for (const i in arr2) {
  console.log(i, arr2[i]);
}

// for each loop
// normal function
arr2.forEach(function (i) {
  console.log(i);
});
// arrow function
arr2.forEach((i) => {
  console.log(i);
});

arr2.forEach((val, index, arr) => {
  console.log(val, index, arr);
});

// alada function and pass it by reference
function print(i) {
  console.log(i);
}
arr2.forEach(print);

const coding = [
  {
    name: "Ayon",
    age: 26,
  },
  {
    hobby: "coding",
    solved: 2500,
  },
];
coding.forEach((item) => {
  // return kore na, just print kore
  console.log(item.name);
});

const nums = [1, 2, 3, 4, 5];
const newnums = nums.filter((num) => num % 2 == 0);
const oddnums = nums.filter((num) => {
  return num & 1;
});
console.log(newnums);
console.log(oddnums);

nums.forEach((i) => {
  if (i % 2 == 0) {
    console.log(i);
  }
});

/// mini project
const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: 1925,
    edition: 2004,
  },

  {
    title: "To Kill a Mockingbird",
    genre: "Non-Fiction",
    publish: 1927,
    edition: 2006,
  },

  {
    title: "The Catcher in the Rye",
    genre: "Science",
    publish: 1950,
    edition: 2010,
  },

  {
    title: "War and Peace",
    genre: "History",
    publish: 1910,
    edition: 1999,
  },
];

const ans = books.filter((obj) => {
    if (obj.genre == "Fiction") {
        return obj;
    }
})

console.log(ans); 



