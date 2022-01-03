
type Filter0 = {
    <T>(array: T[], f: (item:T) => boolean): T[]
}
let filter0: Filter0 = (array, f) => {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}
// <T>를 호출 시그니처의 일부로 선언했으므로
// 타입스크립트는 Filter 타입의 함수를 실제 호출할 때 구체 타입을 T로 한정



// Filter의 타입 별칭으로 한정하려면 
// Filter를 사용할 때 타입을 명시적으로 한정하게 해야 한다.
type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}

/* 
let filter: Filter = (array, f) => {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}
// error TS2314: Generic type 'Filter' requires 1 type argument(s).
 */

/* 
type OtherFilter = Filter
// error TS2314: Generic type 'Filter' requires 1 type argument(s).
 */


let filter: Filter<number> = (array, f) => {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

type StringFilter = Filter <string>
let stringFilter: StringFilter = (array, f) => {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

export {}

