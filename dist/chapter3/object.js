"use strict";
let b = {
    c: 'x'
};
b.c;
let c = {
    d: {
        e: 'f'
    }
};
c.d.e;
let d = {
    e: 12
};
d.e;
let e = {
    firstName: 'john',
    lastName: 'barrowman'
};
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
e = new Person('matt', 'smith');
console.log(e);
let f;
let g;
g = { b: 1 };
g = { b: 1, c: undefined };
g = { b: 1, c: 'd' };
g = { b: 1, 10: true };
g = { b: 1, 10: true, 20: false };
let user = {
    fristName: 'abby'
};
user.fristName;
//# sourceMappingURL=object.js.map