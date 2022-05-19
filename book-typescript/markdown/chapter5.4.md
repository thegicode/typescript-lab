
# 5.4 인터페이스 [{code}](../src/chapter5/5.4.ts)
- 타입에 이름을 지어주는 수단
- 타입별칭가 인터페이스는 문법만 다를 뿐 거의 같은 기능을 수행
- 타입 별칭의 오른편에는 타입 표현식(타입 그리고 &, | 등의 타입 연산자)을 포함한 모든 타입이 등장할 수 있다.
- 인터페이스를 상속할 때 타입스크립트는 상속받는 인터페이스의 타입에 상위 인터페이스를 할당할 수 있는지를 확인한다.
- 이름과 범위가 같은 인터페이스가 여러 개 있다면 이들이 자동으로 합쳐진다(같은 조건에서 타입 별칭이 여러 개라면 컴파일 타입 에러가 난다). 이를 선언 합침이라 부른다.

## 5,4,1 선언 합침 declaration merging [{code}](../src/chapter5/5.4.1.ts)
- 같은 이름으로 정의된 여러 정의를 자동으로 합치는 타입스크립트 기능

## 5.4.2 구현 implement [{code}](../src/chapter5/5.4.2.ts)
- 클래스를 사용할 때 implements라는 키워드를 이용해 특정 인터페이스를 만족시킴을 표현할 수 있다.
- adapter, factory, startegy 등 흔한 디자인 패턴을 구현하는 대표적인 방식이기도 하다. 
- 인터페이스로 프로퍼티를 정의할 수 있지만 가시성 한정자(prvate, protected, public)는 선언할 수 없으며 static 키워드도 사용할 수 없다.
- 객체 안의 객체 타입처럼 인스턴스 프로퍼티를 readonly로 설정할 수 있다.

## 5.4.3 인터페이스 구현 vs. 추상 클래스 상속 
- 인터페이스 구현은 추상 클래스 상속과 비슷하다. 
- 인터페이스가 더 범용으로 쓰이며 가볍다. 
- 추상 클래스는 특별한 목적과 풍부한 기능을 갖는다.
- 인터페이스는 형태를 정의하는 수단이다.
- 추상 클래스는 오직 클래스만 정의할 수 있다.
- 여러 클르스에서 공유하는 구현이라면 추상 클래스를 사용하고, 가볍게 '이 클래스는 T다'라고 말하는 것이 목적이라면 인터페이스를 사용