// for

const a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

let i = 0;
while(i < a.length) {
    console.log(a[i]);
    i++;
}

i = 0;
do {
    console.log(a[i]);
    i++;
}
while (i < a.length);