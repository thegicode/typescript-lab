"use strict";
let this_x = {
    a() {
        return this;
    }
};
console.log(this_x.a()); // a{}안의 바디 안에서 this는 객체 x
// 호출이 일어나기 전 어느 시점에서 a를 다시 할당하면 결과가 달라진다.
let a = this_x.a;
console.log(a()); // undefined 
// function fancyDate() {
//     return `${this.getDate()} ${this.getMonth()} ${this.getFullYear()}`
// }
// console.log( fancyDate.call(new Date) )
// console.log( fancyDate() )
function fancyDate2() {
    return `${this.getDate()} ${this.getMonth()} ${this.getFullYear()}`;
}
console.log(fancyDate2.call(new Date)); // 22 11 2021
// fancyDate2()
// error TS2684: The 'this' context of type 'void' is not assignable to method's 'this' of type 'Date'.
//# sourceMappingURL=this.js.map