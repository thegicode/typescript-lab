

# 4.1 함수 선언과 호출
```
function add(a: number, b: number): number {
    return a + b
}
```

- 실무에서는 타입스크립트가 변환 타입을 추론하도록 하는 게 보통. 타입스크립트가 해줄 수 있는 일을 개발자가 직접 할 필요가 없기 때문.
- 함수 선언 방법
    1. 이름을 붙인 함수
    ```
    function greet(name: string) {
        return 'hello' + name
    }
    ````

    2. 함수 표현식
    ```
    let greet2 = function (name: string) {
        return 'hello' + name
    }
    ```

    3. 화살표 함수 표현식
    ```
    let greet3 = (name: string) => {
        return 'hello' + name
    }
    ```

    4. 단축성 화살표 함수 표현식
    ```
    let greet4 = (name: string) => 
        'hello' + name
    ```

    5. 함수 생성자 
    ```
    let greet5 = new Function('name', `return "hello " + name`)
    ```
    - 안전하지 않으므로 사용하지 않는 편이 좋다.
    - 매개변수 타입과 반환타입을 지정하지 않았으므로 어떤 인수를 건네서도 호출할 수 있으며, 이 과정에서 어떤 문제가 발생하더라도 타입스크립트가 도와주 수 없다.
- 보통 매개변수 타입의 필수 어노테이션, 반환 타입의 선택형 어노테이션에 젹용하는 것과 같은 규칙을 따른다.
- 간단 용어 : 매개변수 parameter(formal parameter), 인수 argument(actual parameter)
- 타입스크립트에서 함수를 호출 할 때 타입 정보는 따로 제공할 필요가 없으며, 바로 인수를 전달하면 타입스크립트가 함수의 매개변수와 인수의 타입이 호환되는지 확인한다.       

## 1 선택적 매개변수와 기본 매개변수 [{code}](../src/chapter4/function.ts)
- ?을 이용해 선택적 매개변수 지정
- 필수 매개변수 먼저 지정하고 선택적 매개변수를 뒤에 추가
- 매개변수에 기본값을 지정할 수 있다.
- 기본 매개변수에 타입을 명시할 수 있다.

## 2 나머지 매개변수 [{code}](../src/chapter4/rest.ts)
- 자바스크립트 런타임이 함수에 자동으로 arguments를 정의해 개발자가 함수로 전달한 인수 목록을 할당한다.
- But arguments는 안전하지 않다. 타입스크립트에서는 인수를 받을 수 없으므로 TypeError 발생
- 나머지 매개변수(rest parameters)를 이용한다. 

## 3 call, apply, bind [{code}](../src/chapter4/callApplyBind.ts)
- apply: 함수 안에서 값을 this로 한정, 두 번째 인수를 펼쳐 함수에 매개변수로 전달
- call: apply와 같은 기능을 수행하지만 인수를 펼치지 않고 순서대로 전달
- bind: 함수를 호출하지 않고 새로운 함수를 반환. ()나 .call(), .apply()
- TSC 플래그 : strictBindCallApply
    - .call, .apply, .bind를 안전하게 사용하려면 tsconfig.json에서 strictBindCallApply를 활성화
    - strict 모드를 이미 활성화했다면 이 옵션은 자동으로 활성화됨

## 4 this의 타입 [{code}](../src/chapter4/this.ts)
- 많은 개발팀은 클래스 메서드를 제외한 다른 모든 곳에서 this 사용을 금한다.
    - TSLint 규칙에서 no-invalid-this를 활성화
- this가 문제를 일으키는 원인은 바로 그 할당 방법
- this의 동작은 예상과 크게 다를 수 있다.
    - 어떻게 선언하느냐가 아니라 함수를 어떻게 호출하느냐에 영향을 받는다.
- this 타입을 함수의 첫 번째 매개변수로 선언하자.
- TSC 플래그 : noImplicitThis
    - 항상 this 타입을 명시적으로 설정하도록 강제
    - 단, 클래스와 객체의 함수에는 this를 지정하라고 강제하지 않는다.

## 5 제너레이터 함수 generator function [{code}](../src/chapter4/generator.ts)
- 여러 개의 값을 생성하는 편리한 기능을 제공
- 값을 생산하는 속도도 정교하게 조절할 수 있다.
- 게으르게 동작(소비자가 요청해야만 다음 값을 계산)
- IterableIterator에서 방출하는 타입을 감싸서 제너레이터의 타입을 명시

## 6 반복자 iterator [{code}](../src/chapter4/iterator.ts)
- 반복자와 제너레이터는 상생관계, 제너레이터로 값의 스트림을 생성할 수 있고 반복자로 생성된 값을 소비
- 이터러블 (iterable, 반복할 수 있는)
    - Symbol.iterator라는 프로퍼티(반복자를 반환하는 함수)를 가진 모든 객체
- 반복자 (iterator)
    - next라는 메서드(value, done 두 프로퍼티를 가진 객체를 반환)를 정의한 객체
- createFibonacciGenerator 함수를 호출하면 Symbol.iterator 프로퍼티와 next 메서드를 모두 정의한 한 값을 얻게 된다. 이터러블과 반복자 두 가지가 결합된 제너레이터가 반환된다.
- TSC 플래그: downlevelIteration
    - 2015 이전 버전의 자바스크립트로 컴파일할 때 활성화
    - 번들 크기가 커지는 것을 원하지 않으면 비활성화

## 7 호출 시그니처 call signature, 타입 시그니처 type signature [{code}](../src/chapter4/signature.ts)
- 타입스크립트의 함수 타입 문법
```
(a: number, b: number) => number
```
- 타입 수준 코드: 타입과 타입 연산을 포함하는 코드를 의미
- 값 수준 코드: 그 밖의 모든 것
- 함수의 호출 시그니처는 구현 코드와 거의 같다.

## 8 문맥적 타입화 contextual typing [{code}](../src/chapter4/contextual.ts)
- 타입 추론 기능

## 9 오버로드된 함수 타입 [{code}](../src/chapter4/overloading.ts)
- 단축형 호출 시그니처 shorthand call signature
```
    type Log = (meesage: string, userId?: string) => void
```
- 전체 호출 시그니처 
```
    type Log = {
        (message: string, userId?: string) : void
    }
```
- Log 함수처럼 간단한 상황이라면 단축형, 더 복잡한 함수라면 전체 시그니처를 사용
- 오버로딩(overloading)이 좋은 예
- 오버로드된 함수 : 호출 시그니처가 여러 개인 함수
- 자바스크립트는 동적 언어이므로 언떤 함수를 호출하는 방법이 여러가지다. 뿐만 아니라 인수 입력 타입에 따라 반환 타입이 달라질 때도 있다.
- 타입스크립트는 이런 동적 특성을 오버로드된 함수 선언으로 제공하고, 입력 타입에 따라 달라지는 함수의 출력 타입은 정적 타입 시스템으로 각각 제공한다. 
- 오버로드된 함수 시그니처를 이용하면 표현력 높은 API를 설계할 수 있다.
- 오버로드 시그니처는 구체적으로 유지하자.
- 브라우저 DOM API에서 유용하게 활용
- 오버로드된 호출 시그니처는 createElement의 동작을 구현하기에 이상적인 매커니즘
- 타입스크립트는 선언한 순서대로 오버로드 해석
    - 타입스크립트는 대부분의 리터럴 오버로드를 리터럴이 아닌 오버로드보다 먼저 그리고 순서대로 처리한다. 하지만 모든 개발자가 이 기능에 익숙한 것은 아니므로 이 기능을 이용한다면 다른 개발자가 오버로드 구현이 어떻게 동작하는지 이해하기 어려울 수 있다.