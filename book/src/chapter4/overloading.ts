
/** Reserve라는 휴가 예약 API 설게 */

type Reserve = {
    (from: Date, to: Date, destination: string) : void
}
let reserve: Reserve = (from, to, destination) => {
    // ...
}

// 편도 여행을 지원하도록 API를 개선
type Reserve2 = {
    (from: Date, to: Date, destination: string) : void
    (from: Date, destination: string) : void
}
// let reserve2: Reserve2 = (from, to, destination) => {
//     // ...
// }
// 함수 f에 여러 개의 오벌드 시그니처를 선언하면, 호출자 관점에서 f의 타입은 오버로드 시그니처들의 유니온이 된다. 
// 하지만 f를 구현하는 관점에서는 단일한 구현으로 조합된 타입을 나타낼 수 있어야 한다.
// 이 조합된 시그니처는 자동으로 추론되지 않으므로 f를 구현할 때 직접 선언해야 한다.

// let reserve3: Reserve2 = (
//     from: Date,
//     toOrDestination: Date | string,
//     destination: string
// ) => {
//     // ...
// }

// 두 가지 방식으로 reserve를 호출할 수 있으므로 reserve를 구현할 때 
// 타입스크립트에 reserve가 어떤 방식으로 호출되는지 확인시켜주어야 한다.
let reserve4: Reserve2 = (
    from: Date,
    toOrDestination: Date | string, 
    destination?: string
) => {
    if (toOrDestination instanceof Date  && destination !== undefined) {
        // 편도 여행 예액
    } else if (typeof toOrDestination === 'string') {
        // 왕복 여행 예약
    }
}

/** createElement DOM API */
type CreateElement = {
    // (tag: 'a'): HTMLAnchorElement
    // (tag: 'canvas'): HTMLCanvasElement
    // (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}
let createElement: CreateElement = (tag: string): HTMLElement => {
    const el = createElement('div')
    el.textContent = tag
    return el
}

// 함수 선언을 오버로드로 한다면
/**
function createElement(tag: 'a') : HTMLAnchorElement
function createElement(tag: 'canvas') : HTMLCanvasElement
function createElement(tag: 'table') : HTMLTableElement
function createElement(tag: string) : HTMLElement {
    ...
}
 */

// 함수의 프로퍼티
/** 
function warnUser(warning) {
    if (warnUser.wasCalled) {
        return
    }
    warnUser.wasCalled = true
    alert(warning)
}
warnUser.wasCalled = false
 */

type WarnUser = {
    (warning: string): void
    wasCalled: boolean
}


export {}