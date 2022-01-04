
/* type MyEvent<T> = {
    target: T,
    type: string
}
let buttonEvent: MyEvent<HTMLButtonElement> = {
    target: myButton,
    type: string
}
 */


/* type MyEvent<T = HTMLElement> = {
    target: T
    type: string
} */

type MyEvent<T extends HTMLElement = HTMLElement> = {
    target: T
    type: string
}
/* 
let myEvent: MyEvent = {
    target: myElement,
    type: string
} */

// 좋음
type MyEvent2 <
    Type extends string, 
    Target extends HTMLElement = HTMLElement,
> = {
    target: Target
    type: Type
}

// 안 좋음
/* type MyEvent3<
    Target extends HTMLElement = HTMLElement,
    Type extends string     // error TS2706: Required type parameters may not follow optional type parameters.
> = {
    target: Target
    type: Type
} */

export {}
