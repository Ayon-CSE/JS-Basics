/// lexical scope
function init() {
  let name = "Ayon";

  function displayName() {
    console.log(name);
  }
  displayName();
}

init(); // Ayon

// closure
function init1() {
  let name = "Ayon";

  function displayName() {
    console.log(name);
  }
  return displayName;
}

let display = init1();
display(); // Ayon 
