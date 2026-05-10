const num = [1, 2, 3, 4, 5];

const ans = num.reduce((sum, curr) => {
  return sum + curr;
}, 2);// 2 theke start, total 17

const ans2 = num.reduce((sum, curr) => sum + curr, 0);// 0 theke start, total 15

console.log(ans);
console.log(ans2);
