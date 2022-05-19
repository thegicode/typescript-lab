
/** 1. 대부분의 상황에서 타입스크립트는 제네릭 타입을 훌륭하게 추론해낸다.  */
interface Array<T> {
    filter(
        callbackfn: (value: T, index: number, array: T[]) => any,
        thisArg?: any
    ): T[]
    map<U>(
        callbackfn: (value: T, index: number, array: T[]) => U,
        thisArg?: any
    ): U[]
}
function map<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = []
    for (let i = 0; i < array.length ; i++) {
        result[i] = f(array[i])
    }
    return result
}
map(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)
// 타입스크립트는 T를 string으로, U를 boolean으로 추론한다.



/** 2. 제네릭도 명시적으로 지정할 수 있다. */
// 제네릭 타입을 명시할 때는 모든 제네릭 타입을 명시하거나 반대로 아무것도 명시해서는 안된다.
map<string, boolean>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)
/* 
map<string>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)
// error TS2558: Expected 2 type arguments, but got 1.
 */


// 타입스크립트는 추론된 각 제네릭 타입을 명시적으로 한정한 제네릭에 할당할 수 있는지 확인한다.
// 할당할 수 없으면 에러가 발생한다.

// boolean은 boolean | string에 할당할 수 있으므로 OK
map<string, boolean | string>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)
/* 
map<string, number>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)
// error TS2322: Type 'boolean' is not assignable to type 'number'.
 */

// 타입스크립트는 제네릭 함수로 전달한 인수의 정보를 이용해 제네릭의 구체 타입을 추론하므로
// 때로는 다음과 같은 상황이 벌어질 수 있다.

/** 
let promise = new Promise(resolve => 
    resolve(45)
)
promise.then(result =>   // {} 로 추론한
    result * 4          // 에러 TS2362: 수학 연산의 왼쪽 연산자는 'any',
                        // 'number', 'bigint', enum  타입 중 하나여야 함
)
// 타입스크립트는 제네릭 함수의 인수에만 의지하여 제네릭 타입을 의존하는데,
// (인수가 아무것도 없으므로 기본적으로) T를 {}로 간주한 것이다.

// 책과 에러 메시지가 다르다.
// error TS2571: Object is of type 'unknown'.
 */

let promise = new Promise<number>(resolve => 
    resolve(45)
)
promise.then(result =>  // number
    result * 4
)

export {}
