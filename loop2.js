// for of loop

// ["", "", ""]
// [{}, {}, {}]

let arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  console.log(i);
}

const greeting = "Hello World";
for (const i of greeting) {
  console.log(i);
}

// Maps
const map = new Map();
map.set("name", "Ayon");
map.set("age", 25);
map.set("city", "New York");

for (const [x, y] of map) {
  console.log(`${x}: ${y}`);
}

/// objects
const obj = {
  game1: "Chess",
  game2: "Monopoly",
  cpp: "C++",
};

// for in loop
for (const i in obj) {
  // key - i, value - obj[i]
  console.log(i, obj[i]);
}
