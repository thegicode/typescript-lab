"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withEZDebug_(Class) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name;
        }
    };
}
function withEZDebug(Class) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name;
            let value = this.getDebugValue();
            return Name + '(' + JSON.stringify(value) + ')';
        }
    };
}
class HardToDebugUser {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        };
    }
}
let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
console.log(user.getDebugValue());
//# sourceMappingURL=5.8.js.map