"use strict";
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
let numers = createNumbers();
console.log(numers.next());
console.log(numers.next());
console.log(numers.next());
//# sourceMappingURL=generator.js.map