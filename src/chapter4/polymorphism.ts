
// 자바스크립트로 filter를 이용해 배열을 반복하면서 정제하는 코드
/** 
function filter(array, f) {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}
filter([1, 2, 3, 4], _ => _ < 3)    // [1, 2]
 */

type Filter = {
    (array: unknown, f: unknown): unknown[]
}

// unknown -> number로 가정
type Filter2 = {
    (array: number[], f: (item: number) => boolean): number[]
}

// filter는 범용 함수, 즉 숫자, 문자열, 객체, 배열, 기타 모든 것으로 구성된 배열을 거를 수 있어야 한다.
// 문자열도 거를 수 있도록 오버로드를 이용해 함수를 확장
type Filter3 = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
}

// 객체
type Filter4 = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
    (array: object[], f: (item: object) => boolean): object[]
}

/** 
const filterB: Filter4 = (
    array: object[], 
    f: (item: object) => object
): object[] => {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}
//  error TS2322: Type '(array: object[], f: (item: object) => object) => object[]' is not assignable to type 'Filter4'.

let names = [
    { firstName: 'beth'},
    { firstName: 'caitlyn'},
    { firstName: 'xin'}
]
let result = filterB( 
    names, 
    _ => _.firstName.startWith('b')
)
console.log(result[0].firstName)
// error TS2339: Property 'firstName' does not exist on type 'object'.

*/

// 타입스크립트에 filter로 숫자, 문자열, 객체의 배열을 전달할 것이라고 선언했다.
// 그런 다음 객체 배열을 전달했는데 object는 객체의 실제 형태에 대해서는 어떤 정보도 알려주지 않는다.
// 따라서 배열에 저장된 객체의 프로퍼티에 접근하려 시도하면 타입스크립트가 에러를 발생시킨다.
// 배열에 저장된 객체의 형태를 알려주지 않았기 때문이다.

// --> 제니릭 타입 Generic type

type Filter5 = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}
// T는 자리를 맡아둔다는 의미의 '플레이스홀더' 타입이며, 타입 검사기가 문맥을 보고 이 placeholder type을 실제 타입으로 채우는 것이다.
// 함수의 매개변수가 함수를 호출할 때 건네진 인수로 매번 다시 한정하듯, T도 filter를 호출할 때마다 새로운 타입으로 한정된다.

const filterC: Filter5 = (array, f) => {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

// (a) T는 number로 한정됨
console.log('Generic-a: ', filterC([1, 2, 3], _ => _ <= 2) )    // [1, 2]

// (b) T는 string으로 한정됨
console.log('Generic b: ', filterC(['a', 'b'], _ => _ !== 'b')) //  [ 'a' ]

// (c) T는 {firstName: string}으로 한정됨
let names = [
    { firstName: 'beth'},
    { firstName: 'caitlyn'},
    { firstName: 'xin'}
]
console.log('Generic c: ', filterC(names, _ => _.firstName.startsWith('b'))) 
//  [[ { firstName: 'beth' } ]

export {}