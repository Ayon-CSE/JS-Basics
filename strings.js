const name = "Ayon";
const repoCount = 50;

//// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const s = "Ayon";
console.log(s[1]);

console.log(s.toUpperCase());
console.log(s.indexOf("Ayon"));

const t = s.substring(0, 2);
console.log(t);

const t2 = s.slice(-2);
console.log(t2);

const t3 = "   Ayon    ";
console.log(t3.trim());/// trim spaces from both sides

const url = "https://www.ayon.com/ayon%20das";
console.log(url.replace('%20', '-')); /// replace space with hyphen

const t5 = "ayon-das-gupta";
const arr = t5.split("-");
console.log(arr);