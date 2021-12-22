// let a: object = {
//     b: 'x'
// }

// a.b // TS2339: Property 'b' does not exist on type 'object'.


let b = {
    c: 'x'
}
b.c

let c = {
    d: {
        e: 'f'
    }
}
c.d.e

let d: { e: number } = {
    e: 12
}
d.e

let e: {
    firstName: string,
    lastName: string
} = {
    firstName: 'john',
    lastName: 'barrowman'
}

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){ }
}
e = new Person('matt', 'smith')
console.log(e) // Person { firstName: 'matt', lastName: 'smith' }

let f: { b: number }
// f = {}      
// error TS2741: '{}' 타입에는 '{b: number}' 타입에 대한 'b' 프로퍼티가 없음
// f = {
//     b: 1,
//     c: 2    
// }
// error TS2322: 
// '{ b: number; c: number; }' 타입을 '{ b: number; }' 타입에 할당할 수 없음
// 객체 리터럴은 알려진 프로퍼티만 지정할 수 있는데
// 'c'는 '{ b: number; }' 타입에 존재하지 않음


let g: {
    b: number,
    c?: string,
    [key: number]: boolean
}
g = {b: 1}
g = {b: 1, c: undefined}
g = {b: 1, c: 'd'}
g = {b: 1, 10: true}
g = { b: 1, 10: true, 20: false}
// g = {10: true}  
// error TS2741, 'b' 프로퍼티가 없음
// g = {b: 1, 33: 'red'}   
// error TS2322: 'string' 타입은 'boolean' 타입에 할당할 수 없음

let user: {
    readonly fristName: string
} = {
    fristName: 'abby'
}
user.fristName
// user.fristName = 'abbey with an e'  
// error TS2540, 'firstName'은 읽기 전용 프로퍼티이므로 할당할 수 없음

