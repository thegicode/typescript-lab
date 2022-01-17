
# 5.1 클래스와 상속 [{code}](../src/chapter5/5.1.ts)
- TSC 플래그: strictNullChecks와 strictPropertyInitialization
    - 클래스 인스턴스 변수를 할당했는지 확인
    - strict 플래그에 포함
- class 키워드로 클래스를 선언한 후 extends 키워드로 다른 클래스를 상속 받을 수 있다.
- 타입스크립트는 클래스의 프로퍼티와 메서드에 세 가지 접근 한정자를 제공
    - public: 어디서나 접근할 수 있다. 기본적으로 주어지는 접근 수준.
    - protected: 이 클래스와 서브클래스의 인스턴스에서만 접근할 수 있다.
    - private: 이 클래스의 인스턴스에서만 접근할 수 있다.
- abstract: 인스턴스를 직접 생성하지 못하고 막고 대신 클래스를 상속받은 클래스를 통해서만 인스턴스화할 수 있도록 허용