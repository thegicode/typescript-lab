
# 5.8 믹스인 [{code}](../src/chapter5/5.8.ts)
- 자바스크립트와 타입스크립트는 trait나 mixins 키워드를 제공하지 않지만 손쉽게 직접 구현할 수 있다.
    - 두 키워드 모두 둘 이상의 클래스를 상속받는 다중 상속(multiple inheritance)과 관련된 기능을 제공하며, 
    - 역할 지향 프로그래밍(role-oriented programming)을 제공한다. 
    - 역할 지향 프로그래밍에서는 '이것은 Shape에요'라고 표현하는 대신 '측정할 수 있어요.', '네 개의 면을 갖고 있어요' 처럼 속성을 묘사하는 방식을 사용한다.
    - 즉, 'is-a' 관계 대신 'can', 'has-a'관계를 사용한다.
- 믹스인이란 동작과 프로퍼티를 클래스로 혼합할 수 있게 해주는 패턴이므로, 다음 규칙을 따른다.
    - 상태를 가질 수 있다. (예: 인스턴스 프로퍼티)
    - 구체 메서드만 제공할 수 있다. (추상 메서드는 안됨)
    - 생성자를 가질 수 있다.
    
