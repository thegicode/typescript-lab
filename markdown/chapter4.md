# Chapter4 함수

## 함수 선언과 호출
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


