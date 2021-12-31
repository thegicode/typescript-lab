
/** 1 */
type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}
// let filter: Filter = 

// T의 범위를 개별 시그니로 한정한 전체 호츨 시그니처.
// T를 한 시그니처의 범위로 한정했으므로 
// 타입스크립트는 filter 타입의 함수를 호출할 때 이 시그니처의 T를 구체타입으로 한정한다. 
// 각각의 filter 호출은 자신만의 T 한정값을 갖는다. 


/** 2 */
type Filter2<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}
// let filter: Filter<number> = 

// T의 범위를 모든 시그니처로 한정한 전체 호출 시그니처
// T를 filter타입의 일부로 (특정 시그니처 타입이 아니라) 선언했으므로
// 타입스크립트는 Filter 타입의 함수를 선언할 때 T를 한정한다.




/** 3 */
type Filter3 = <T>(array: T[], f: (item: T) => boolean) => T[]
// let filter: Filter =

// 1과 비슷하지만 전체 시그니처가 아니라 단축 호출 시그니처다.



/** 4 */
type Filter4<T> = (array: T[], f: (item: T) => boolean) => T[]
// let filter: Filter<string>  

// 2와 비슷하지만 전체 시그니처가 아니라 단축 호출 시그니처다.



/** 5 */
function filter<T>(array: T[], f: (item: T) => boolean): T[] {
    return []
}

// T를 시그니처 범위로 한정한, 이름을 갖는 함수 호출 시그니처.
// filter를 호출할 때 T를 타입으로 한정하므로 
// 각 filter 호출은 자신만의 T 한정 값을 갖는다.


/** map 함수 
 * filter와 비슷하지만 배열에서 항목을 제거하는 대신 매핑 함수를 이용하여 각 항목을 변환한다.
*/
function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
    let result = []
    for (let i = 0; i < array.length ; i++) {
        result[i] = f(array[i])
    }
    return result
}

function map2<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = []
    for (let i = 0; i < array.length ; i++) {
        result[i] = f(array[i])
    }
    return result
}
// 인수 배열 멤버의 타입을 대변하는 T,
// 반환 배열 멤버 타입을 대변하는 U 


/** 표준 라이브러리의 filter와 map */
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
/** 
    filter와 map함수가 T 타입을 담는 배열을 다룬다
    filter는 범위가 Array 인터페이스 전체인 제네릭 T를 사용한다. 
    map도 T를 사용하며, 이와 더불어 범위가 map 함수로만 제한된 두 번째 제네릭인 U도 사용한다. 
    즉, 타입스크립트는 배열을 만들 때 T를 구체적 타입으로 한정하고, 
    이 배열 인스턴스에서 호출되는 filter와 map들은 만들어질 때 한정된 구체 타입을 공유하게 된다. 
    한편 map을 호출하면 기존에 한정한 T를 이용할 수 있을 뿐 아니라 자신만의 U 한정 값도 갖는다. 
    자바스크립트 표준 라이브러리의 많은 함수, 특히 Array의 프로토타입이 제공하는 함수들은 제네릭이다. 
    배열은 어떤 타입의 값이든 포함할 수 있으므로 
    이 타입을 T라 하면 ".push는 인수로 T 타입을 받는다"라든가 ".map은 T의 배열을 U의 배열로 매핑한다."라고 말할 수 있다.
*/

export {}

