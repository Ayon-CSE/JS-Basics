let descripter  = Object.getOwnPropertyDescriptor(Math, 'PI'); // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}


console.log(Math.PI); // 3.141592653589793
console.log(descripter); 

let chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log(`You have ordered ${this.name} for ${this.price} taka`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // {value: "chai", writable: true, enumerable: true, configurable: true}

// object er property er descripter change kora jay, but math er PI er descripter change kora jabe na
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); // {value: "chai", writable: false, enumerable: false, configurable: false}

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {// function dekhte na chaile
      console.log(key, value); // name ginger chai, price 250, isAvailable true
    }
}