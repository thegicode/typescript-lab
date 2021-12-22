"use strict";
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3]));
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadicSafe(1, 2, 3));
//# sourceMappingURL=rest.js.map