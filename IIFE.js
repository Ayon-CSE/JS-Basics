// Immediately Invoked Function Expression (IIFE)

(function chai() {
 // named IIFE
  console.log("DB Connected");
})();

(() => {
  // unnamed IIFE
  console.log("DB Connected with Arrow Function");
})();

( (name) => {
  console.log(`${name}`);
})("Ayon");

// why use iife? to create a new scope and avoid polluting the global namespace. It allows us to execute code immediately without leaving any variables or functions in the global scope. This is particularly useful for encapsulating code and preventing conflicts with other scripts.
