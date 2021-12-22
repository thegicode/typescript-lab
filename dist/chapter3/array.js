"use strict";
let a = [1, 2, 3];
var b = ['a', 'b'];
let c = ['a'];
let d = [1, 'a'];
const e = [2, 'b'];
let f = ['red'];
f.push('blue');
let g = [];
g.push(1);
g.push('red');
let h = [];
h.push(1);
h.push('red');
function buildArray() {
    let a = [];
    a.push(1);
    a.push('x');
    return a;
}
let myArray = buildArray();
myArray.push(true);
//# sourceMappingURL=array.js.map