"use strict";
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
let numbers_gs = createNumbers();
console.log(numbers_gs.next());
console.log(numbers_gs.next());
console.log(numbers_gs.next());
//# sourceMappingURL=generator.js.map