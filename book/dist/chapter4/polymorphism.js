"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterC = (array, f) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
console.log('Generic-a: ', filterC([1, 2, 3], _ => _ <= 2));
console.log('Generic b: ', filterC(['a', 'b'], _ => _ !== 'b'));
let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
];
console.log('Generic c: ', filterC(names, _ => _.firstName.startsWith('b')));
//# sourceMappingURL=polymorphism.js.map