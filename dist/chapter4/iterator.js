"use strict";
let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};
console.log([...numbers]);
for (let a of numbers) {
    console.log(a);
}
let allNumbers = [...numbers];
console.log(allNumbers);
let [one, two, ...rest] = numbers;
//# sourceMappingURL=iterator.js.map