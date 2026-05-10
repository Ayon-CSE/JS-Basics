const num = [1, 2, 3, 4, 5];

const ans = num.map((num) => {
    return num + 10;
});

const ans2 = num
    .map((num) => num * 10)
    .map((num) => num + 10)
    .filter((num) => num > 10);
console.log(ans2);
