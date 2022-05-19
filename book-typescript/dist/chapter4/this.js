"use strict";
let this_x = {
    a() {
        return this;
    }
};
console.log(this_x.a());
let a = this_x.a;
console.log(a());
function fancyDate2() {
    return `${this.getDate()} ${this.getMonth()} ${this.getFullYear()}`;
}
console.log(fancyDate2.call(new Date));
//# sourceMappingURL=this.js.map