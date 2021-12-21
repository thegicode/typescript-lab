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

## symbol [코드](../src/chapter03/symbol.ts)
- symbol 타입으로 추론되거나 아니면 명시적으로 unique symbol을 정의할 수 있다.
- unique symbole도 결국 1, true, "literal" 등 다른 리터럴 타입과 마친가지로 특정 symbol을 나타내는 타입이다.

## 객체 [코드](../src/chapter03/object.ts)
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

## 타입 별칭 [코드](../src/chapter03/type.ts)
- 타입 별칭으로 타입을 가리킬 수 있다.
- 타입 별칭은 복잡한 타입을 DRY(Don't Repeat Yourself, 같은 코드를 반복하지 않아야 한다, 실용주의 프로그래머)하지 않도록 해주며
변수가 어떤 목적으로 사용되었는지 쉽게 이해할 수 있게 도와준다.

## 유니온과 인터섹션 타입 [코드](../src/chapter03/union.ts)
- Union: 합집합, Intersection: 교집합

## 배열 [코드](../src/chapter03/array.ts)
- 문법 : T[], Array<T>
- 배열을 선언하고 문자열 타입의 값을 추가했을 때 타입스크립트는 이 배열이 문자열 값을 갖는 배열이라 추론한다.
- 객체와 마찬가지로 배열을 const로 만들어도 타입스크립트는 타임을 더 좁게 추론하지 않는다. 
- 빈 배열을 초기화하면 타입스크립트는 배열의 요소 타입을 알 수 없으므로 any일 것으로 추측, 배열이 정의된 영역을 벗어나면 타입스크립트는 배열을 더 이상 확장할 수 없도록 최종 타입을 할당

## 튜플 tutple [코드](../src/chapter03/tuple.ts)
- 배열의 서브타입
- 길이가 고정, 각 인덱스의 타입이 알려진 배열의 일종
- 선언할 때 타입을 명시해야 한다.
- 튜플은 선택형 요소도 지원
- 튜플은 이형 배열을 안전하게 관리할 뿐 아니라 배열 타입의 길이도 조절한다. 순수 배열에 비해 안전성을 높일 수 있으므로 튜플 사용을 권장
- 읽기 전용 배열과 튜플
    - 읽기 전용 배열을 갱신하려면 .push, .splice 처럼 내용을 바꾸는 동작 대신 
    .concat, .slice 같이 내용을 바꾸지 않는 메서드를 사용해야 한다.
    - 불변 배열을 자주 사용해야 하는 상황이라면 Lee Byron의 immutable 같은 효율적인 라이브러리를 고려

## null, undefined, void, never
- undefiend: 아직 값을 변수에 할당하지 않음
- null: 값이 없음
- void: 명시적으로 아무것도 반환하지 않는 함수의 반환 타입(에: console.log), return문을 포함하지 않는 함수
- never: 절대 반환하지 않는(예외를 던지거나 실행되는) 함수 타입
- 엄격한 null 확인 : strictNullChecks 옵션을 false로 설정하면 다르게 동작한다.

## 열거형 enum [코드](../src/chapter03/enum.ts)
- 해당 타입으로 사용할 수 있는 값을 열거
- 키를 값에 할당하는, 순서가 없는 자료구조
- 키가 컴파일에 고정된 객체
- const enum을 사용
- 숫자 값을 받는 열거형은 전체 열거형의 안전성을 해칠 수 있다.
- 열거형을 안전하게 사용하는 방법은 까다로우므로 열거형 자체를 멀리 할 것을 권한다.

## 마치며
- let과 var를 사용하면 일반적인 타입으로 추론하는 반면, const를 이용하면 더 구체적인 타입을 추론하게 만든다. 
- 대부분의 타입은 일반 타입과 구체적 타입 두 가지를 제공하며, 구체적 타입은 보통 타입의 서브타입
- 표. 타입 그리고 구체적인 서브타입

| 타입 | 서브타입 |
|---|-----|
| Boolean | 불 리터럴 |
| bigint | 큰 정수 리터럴 |
| number | 숫자 리터럴 |
| string | 문자열 리터럴 |
| symbol | unique symbole |
| object | 객체 리터럴 |
| Array | 튜플 |
| enum | const enum |