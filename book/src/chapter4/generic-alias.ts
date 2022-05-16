
/** click이나 mousedown 같은 DOM 이벤트 */
type MyEvent<T> = {
    target: T
    type: string
}

type ButtonEvent = MyEvent<HTMLButtonElement>

/* 
MyEvent 같은 제네릭 타입을 사용할 때는 
    타입이 자동으로 추론되지 않으르모 
    타입 매개변수를 명시적으로 한정해야 한다.

let myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector('#myButton'),
    type: 'click'
}
 */


/* 
MyEvent로 TimedEvent 같은 다른 타입을 만들 수 있다. 
    타입스크립트는 TimedEvent의 제네릭 T로 한정할 때 이를 MyEvent에도 적용한다.
 */
type TimedEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}


/* 
제네릭 타입 별칭을 함수 시그니처에도 사용할 수 있다. 
타입스크립트는 구체 타입 T로 한정하면서 동시에 MyEvent에도 적용한다.

function triggerEvent<T>(event: MyEvent<T>): void {

}

triggerEvent({ // T는 Element | null
    target: document.querySelector('#myButton'),
    type: 'mouseover'
})
 */

export {}