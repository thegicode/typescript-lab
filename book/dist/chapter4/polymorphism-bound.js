"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = { value: 'a' };
let b = { value: 'b', isLeaf: true };
let c = { value: 'c', children: [b] };
let a1 = mapNode(a, _ => _.toUpperCase());
let b1 = mapNode(b, _ => _.toUpperCase());
let c1 = mapNode(c, _ => _.toUpperCase());
console.log('a1', a1);
console.log('b1', b1);
console.log('c1', c1);
function mapNode(node, f) {
    return Object.assign(Object.assign({}, node), { value: f(node.value) });
}
function logPerimeter(s) {
    console.log('logPerimeter: ', s.numberOfSides * s.sideLength);
    return s;
}
let square = { numberOfSides: 4, sideLength: 3 };
logPerimeter(square);
function call(f, ...args) {
    return f(...args);
}
function fill(length, value) {
    return Array.from({ length }, () => value);
}
let d = call(fill, 10, 'a');
console.log(d);
//# sourceMappingURL=polymorphism-bound.js.map