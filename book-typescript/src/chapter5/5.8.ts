
/* 타잆스크립트 클래스의 디버깅 라이버리를 설계한다고 가정. EZDebug
* 이 라이브러리를 이용해 라이브러리를 사용하는 모든 클래스의 정보를 출력해서 런타임에 클래스를 검사할 수 잇다.
*/

/* 다음 처럼 사용
class User {
    // ...
}
User.debug() // 'User({"id": 3, "name": "Emman gluzman"})'로 평가
*/

type ClassConstructor_ = new (...args: any[]) => {}

function withEZDebug_<C extends ClassConstructor_>(Class: C) {
    return class extends Class {
        // constructor(...args: any[]) {
        //     super(...args)
        // }
        debug() {
            let Name = this.constructor.name
            // let value = this.getDebugValue()
            // return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}

type ClassConstructor<T> = new (...args: any[]) => T

function withEZDebug<C extends ClassConstructor<{
    getDebugValue(): object
}>>(Class: C) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name
            console.log(this.constructor.name)
            let value = this.getDebugValue()
            return `${Name}(${JSON.stringify(value)})`
        }
    }
}
// 형태 타입 C를 ClassConstructor에 연결함으로써 
// withEZDebug로 전달한 생성자가 .getDebugValue 메서드를 정의하도록 강제했다.

class HardToDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
console.log(user.debug())   //  { id: 3, name: 'Emma Gluzman' }

export {}