
function times(
    f: (index: number) => void,
    n: number
) {
    for( let i = 0 ; i < n ; i++) {
        f(i)
    }
}

// time를 호출할 때 함수 선언을 인라인으로 제공하면 인수로 전달하는 함수의 타입을 명시할 필요가 없다.
times(n => console.log(n), 4)
// times의 시그니처에서 f의 인수 index를 number로 선언했으므로 타입스크립트는 문맥상 n이 number임을 추론

// f를 인라인으로 선언하지 않으면 타입스크립트는 타임을 추론할 수 없다.
function f(n) {
    console.log(n)
}
times(f, 4) // error TS7006: Parameter 'n' implicitly has an 'any' type.


export {}