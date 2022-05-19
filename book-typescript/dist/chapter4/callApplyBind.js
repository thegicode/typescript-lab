"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add.apply(null, [10, 20]));
console.log(add.call(null, 10, 20));
console.log(add.bind(null, 10, 20)());
//# sourceMappingURL=callApplyBind.js.map