// type Sushi = {
//     calories: number,
//     salty: boolean,
//     tasty: boolean
// }

// type Cake = {
//     calories: number,
//     sweet: boolean,
//     tasty: boolean
// }

type Food = {
    calories: number,
    tasty: boolean
}

type Sushi = Food & {
    salty: boolean
}
type Cake = Food & {
    sweet: boolean
}



// interface Sushii {
//     calories: number,
//     salty: boolean,
//     tasty: boolean
// }

interface foodd {
    calories: number
    tasty: boolean
}
interface Sushii extends foodd {
    salty: boolean
}
interface Cakee extends foodd {
    sweet: boolean
}





// 다름과 같은 별칭 코드는 인터페이스로 다시 작성할 수 없다.
type A = number
type B = A | string

interface AA {
    good(x: number): string
    bad(x: number): string
}

interface BB extends AA {
    good(x: string | number): string
    // bad(x: string): string
}
// error TS2430: Interface 'BB' incorrectly extends interface 'AA'.
// Types of property 'bad' are incompatible.
//   Type '(x: string) => string' is not assignable to type '(x: number) => string'.
//     Types of parameters 'x' and 'x' are incompatible.
//       Type 'number' is not assignable to type 'string'.





export {}