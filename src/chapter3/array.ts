let a = [1, 2, 3]
var b = ['a', 'b']
let c: string[] = ['a']
let d = [1, 'a']    // (string | number)[]
const e = [2, 'b']  // (string | number)[]

let f = ['red']
f.push('blue')
// f.push(true)  // error TS2345: 'true' 타입 인수를 'string' 타입 매개변수에 할당할 수 없음

let g = []  // any[]
g.push(1)   // number[]
g.push('red')   // (string | number)[]

let h: number[] = []
h.push(1)
// h.push('red')   // error TS2345: 'red' 타입 인수를 'number'타입 매개변수에 할당할 수 없음

function buildArray() {
    let a = []  // any[]
    a.push(1)   // number[]
    a.push('x')     // (string | number)[]
    return a
}
let myArray = buildArray()  // (string | number)[]
// myArray.push(true)  // error TS2345: 'true' 타입의 인수는 'string | number' 타입의 매개변수에 할당할 수 없음

export {}
