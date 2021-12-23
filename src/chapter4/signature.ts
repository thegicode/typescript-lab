
/** 타입 별칭으로 한정할 수 있는 독립 호출 시그니처 */

// greet(name: string) 함수
type Greet = (name: string) => string

// log(message: string, useId?: string) 함수
type Log = (message: string, userdId?: string) => void

// sumVariadicSafe(...numbers: number[]): number 함수
type SumVariadicSafe = (...numbers: number[]) => number


/** 기존의 Log 함수를 새로운 시그니처에 맞게 다시 구현 */
let log_signatrue: Log = (
    message,
    userId = 'Not signed in'
 ) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

log_signatrue('good day')
log_signatrue('enjoy typescript', 'thegicode')