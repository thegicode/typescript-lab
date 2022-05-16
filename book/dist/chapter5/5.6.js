"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 1999;
function b() { }
class C {
}
let c = new C;
var E;
(function (E) {
    E[E["F"] = 0] = "F";
    E[E["G"] = 1] = "G";
})(E || (E = {}));
let e = E.F;
class StringDatabase {
    constructor() {
        this.state = {};
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase;
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}
class StringDatabase2 {
    constructor(state = {}) {
        this.state = state;
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase2;
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}
//# sourceMappingURL=5.6.js.map