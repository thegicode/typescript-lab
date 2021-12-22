
/** 
function* createFinonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
        yield a
        [a, b] = [b, a + b]
    }
}

let  fibonacciGenerator = createFinonacciGenerator()
*/

function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
        yield n++
    }
}
let numers = createNumbers()
console.log( numers.next() )    // { value: 0, done: false }
console.log( numers.next() )    // { value: 1, done: false }
console.log( numers.next() )    // { value: 2, done: false }