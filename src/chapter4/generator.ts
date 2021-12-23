
/** 
function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
        yield a
        [a, b] = [b, a + b]
    }
}

let  fibonacciGenerator = createFibonacciGenerator()
*/

function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
        yield n++
    }
}
let numbers_gs = createNumbers()
console.log( numbers_gs.next() )    // { value: 0, done: false }
console.log( numbers_gs.next() )    // { value: 1, done: false }
console.log( numbers_gs.next() )    // { value: 2, done: false }
