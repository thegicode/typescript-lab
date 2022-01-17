
// User는 name이라는 한 개의 필드를 가짐
interface User {
    name: string
}

// 이제 User는 name, age 두 개의 필드를 가짐
interface User {
    age: number
}

let a: User = {
    name: 'Ashley',
    age: 30
}

// interface User2<Age extends number> {
//     age: Age
// }
// error TS2428: All declarations of 'User2' must have identical type parameters.
interface User2<Age extends string> {
    age: Age
}

export {}