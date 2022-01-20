

// 값
let a = 1999
function b() {}

// 타입
type a = number
interface b {
    (): void
}


/** 클래스와 열거형 */ 
class C {}          
let c: C            // 문맥상 C는 C 클래스의 인스턴스 타입을 가리킨다.
    = new C         // 문맥상 C는 값 C를 가리킨다.

enum E {F, G}       // 문맥상 E는 E 열거형의 타입을 가리킨다.
let e: E = E.F      // 문맥상 E는 값 E를 가리킨다.





/** 위 예제에서 c는 C 클래스의 인스턴스를 가리킨다.
 * 그렇다면 C 클래스 자체를 어떻게 가리킬 수 있을가?
 * typeof 키워드를 사용하면 된다. 
 * (자바스크립트에 값 수준의 typeof가 있듯이 타입스크립트에는 타입 수준의 typeof가 있다.)
 */

type State = {
    [key: string]: string
}

class StringDatabase {
    state: State = {}
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string): void {
        this.state[key] = value
    }
    static from(state: State) {
        let db = new StringDatabase
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}

interface StringDatabase {
    state: State
    get(key: string): string | null
    set(key: string, value: string): void
}

// typeof StringDatabase의 생성자 타입
interface StringDatabaseContructor {
    new(): StringDatabase
    from(state: State): StringDatabase
}


// StringDatabase가 선택적으로 초기 상태를 받도록 수정
class StringDatabase2 {
    constructor(public state: State = {}) {}
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string): void {
        this.state[key] = value
    }
    static from(state: State) {
        let db = new StringDatabase2
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}

interface StringDatabase2Contructor {
    new(state?: State): StringDatabase2
    from(state: State): StringDatabase2
}


export {}