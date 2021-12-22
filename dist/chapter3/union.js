"use strict";
// Cat
let a = {
    name: 'Bonkers',
    purrs: true
};
// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true
};
// Both
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
};
let b = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
};
// 실전에서는 intersection 보다 union을 자주 사용한다.
function trueOrNull(isTrue) {
    if (isTrue) {
        return 'true';
    }
    return null;
}
// function(a: string, b: number) {
//     return a || b
// }
//# sourceMappingURL=union.js.map