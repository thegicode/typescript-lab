"use strict";
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3])); // 6
/** arguments */
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}
// sumVariadic(1, 2, 3)
// error TS2554: Expected 0 arguments, but got 3.
// sumVariadic이 인수를 받지 않도록 선언
// 타입스크립트 입장에서는 인수를 받을 수 없다면서 TypeError 발생
/** rest parameters */
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadicSafe(1, 2, 3)); // 6
//# sourceMappingURL=rest.js.map