"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
map(['a', 'b', 'c'], _ => _ === 'a');
map(['a', 'b', 'c'], _ => _ === 'a');
map(['a', 'b', 'c'], _ => _ === 'a');
let promise = new Promise(resolve => resolve(45));
promise.then(result => result * 4);
//# sourceMappingURL=generic-inference.js.map