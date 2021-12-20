# Chapter3 

## any
- TSC 플래그 : noImplicitAny
    - 타입스크립트의 기본 설정은 자유를 허용하므로 any로 추론되는 값을 발견하더라도 예외를 발생시키지 않는다. 
    그러나 암묵적인 any가 나타났을 때 예외를 일으키고 싶다면 tsconfig.json 파일에서 noImplicitAny 플래그를 활성화하자.
    noImplicitAny는 TSC 플래그의 strict 패밀리에 속하므로, strict를 활성화했다면 noImplicitAny를 활성화히자 않아도 된다.

## unknown
- 타입을 미리 알 수 없는 어떤 값이 있을 때 any 대신 unknown을 사용하자. 
any처럼 unknown도 모든 값을 대표하지만, unknown의 타입을 검사해 refine하기 전까지는 타입스크립트가 unknown 타입의 값을 사용할 수 없게 강제한다.

## boolean
```
let e: true = true  // true
let f: true = false // error TS2322: 'false'타입을 'true'타입에 할당할 수 없음
```
- 타입 리터럴(type literal) : 오직 하나의 값을 나타내는 타입
- 타입 리터럴은 모든 곳에서 일어날 수 있는 실수를 방지해 안전성을 추가로 확보해주는 강력한 언어 기능

## [symbol](../src/chapter3/symbol.ts)
- symbol 타입으로 추론되거나 아니면 명시적으로 unique symbol을 정의할 수 있다.
- unique symbole도 결국 1, true, "literal" 등 다른 리터럴 타입과 마친가지로 특정 symbol을 나타내는 타입이다.

## [객체](../src/chapter3/object.ts)
- Index signatrue [key: T]: U - '이 객체에서 모든 T 타입의 키는 U 타입의 값을 갖는다'
- readonly 한정자를 이용해 특정 필드를 읽기 전용으로 정의할 수 있다. 
- 타입스크립트에서 객체를 정의하는 방법
    1. 객체 리터럴 또는 형태라 불리는 표기법({a: string}). 객체가 어떤 필드를 포함할 수 있는지 알고 있거나 모든 값이 같은 타입을 가질 때 사용한다.
    2. 빈 객체 리터럴 표기법({}). 이 방법은 사용하지 않는 것이 좋다.
    3. object 타입. 어떤 필드를 가지고 있는지는 관심 없고, 그저 객체가 필요할 때 사용한다.
    4. Object 타입. 사용하지 않는 것이 좋다.
- 표. 이 값은 유용한 객체인가?


| 값 | {} | object | Object |
|------|---|---|---|
| {} | ○ | ○ | ○ |
| ['a'] | ○ | ○ | ○ |
| function(){} | ○ | ○ | ○ |
| new Strig('a) | ○ | ○ | ○ |
| 'a' | ○ | x | ○ |
| 1 | ○ | x | ○ |
| Symbol('a') | ○ | x | ○ |
| Null | x | x | x |
| undefined | x | x | x |

## [타입 별칭](../src/chapter3/type.ts)
- 타입 별칭으로 타입을 가리킬 수 있다.
- 타입 별칭은 복잡한 타입을 DRY(Don't Repeat Yourself, 같은 코드를 반복하지 않아야 한다, 실용주의 프로그래머)하지 않도록 해주며
변수가 어떤 목적으로 사용되었는지 쉽게 이해할 수 있게 도와준다.

## [유니온과 인터섹션 타입](../src/chapter3/union.ts)
- Union: 합집합, Intersection: 교집합


