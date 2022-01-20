
/* 
class MyMap<K, V> {     // 1
    constructor(initialKey: K, initialValue: V) {   // 2
    }
    get(key: K): V {    // 3
    }
    set(key: K, value: V): void {   
    }
    merge(<K1, V1>(map: MyMap<K1, V1>)): MyMap<K | K1, V | V1> {    // 4
    }
    static of<K, V>(k: K, v: V): MyMap<K, V> {  // 5
    }
 } 

 1. class와 함께 제네릭을 선언했으므로 클래스 전체에서 타입을 사용할 수 있다.
    MyMap의 모든 인스턴스 메서드와 인스턴스 프로퍼티에서 K와 V를 사용할 수 있다.
 2. constructor에는 제네릭 타입을 선언할 수 없음을 기억하자. 
    constructor 대신 class 선언에 사용해야 한다.
 3. 클래스로 한정된 제네릭 타입은 클래스 내부의 어디에서나 사용할 수 있다.
 4. 인스턴스 메서드는 클래스 수준 제네릭을 사용할 수 있으며 자신만의 제네릭도 추가로 선언할 수 있다.
    .merge는 클래스 수준 제네릭인 K와 V에 더해 자신만의 제네릭 타입인 K1과 V1을 추가로 선언했다.
 5. 정적 메서드는 클래스의 인스턴스 변수에 값 수준에서 접근할 수 없듯이 클래스 수준의 제네릭을 사용할 수 없다. 
    따라서 of는 1에서 선언한 K와 V에 접근할 수 없고 자신만의 K와 V를 직접 선언했다.
 */

// 인터페이스 에서도 제네릭을 사용할 수 있다.
interface MyMap<K, V> {
    get(key: K): V
    set(key: K, value: V): void
}

/* 함수와 마찬가지로 제네릭에 구체 타입을 명시하거나 타입스크립트가 타입으로 추론하도록 할 수 있다.
let a = new MyMap<string, number>('k', 1)   // MyMap<string, number>
let b = new MyMap('k', true)    // MyMap<string, boolean>

a.get('k')
b.set('k', fasle) 
*/

export {}