# Chapter2 타입스크립트

## 컴파일러
- TS and JS
    - TS 
        1. 타입스크립트 소스 -> 타입스크립트 AST(Abstract syntax tree)
        2. 타입 검사기가 AST를 확인
        3. 타입스크립트 AST -> 자바스크립트 소스
    
    - JS

        5. 자바스크립트 소스 -> 자바스크립트 AST
        6. AST -> 바이트코드
        7. 런타임이 바이트코드를 평가
- 보통 자바스크립트 컴파일러와 런타임은 엔진이라는 하나의 프로그램으로 합쳐진다.
    프로그래머는 주로 이 엔진과 상호작용한다
    V8(NodeJS, 크롬, 오페라에서 사용), 스파이더몽키(피아어폭스), JSCore(사파리), 샤크라(엣지) 등이 이처럼 동작하며 
    자바스크립트가 해석되는(interpreted) 언어의 모습을 갖게 만든다.

## 타입시스템(Type system)
- 타입 검사기가 프로그램에 타입을 할당하는 데 사용하는 규칙 집합
- 타입스크립트 vs. 자바스크립트

| 타입 시스템 기능 | 자바스크립트 | 타입스크립트 |
|-------|---|---|
| 타입 결정 방식 | 동적 | 정적 |
| 타입이 자동으로 변환되는가? | O | X(대부분) |
| 언제 타입을 확인하는가? | 런타임 | 컴파일 타임 |
| 언제 에러를 검출하는가? | 런타임(대부분) | 컴파일 타임(대부분) |

## 코드 편집기 설정
- TSC, TSLint, NodeJS용 타입 선언 설치

```npm install --save-dev typescript tslint @types/node```

- tsconfing.json
```
    {
        "compilerOptions": {
            "lib": ["es2015"],
            "module": "commonjs",
            "outDir": "dist",
            "sourceMap": true,
            "strict": true,
            "target": "ES2015"
        },
        "include": [
            "src"
        ]
    }
```
- ```./node_modules/.bin/tsc --init``` 을 통해 자동으로설정할 수 있다.
- 표 tsconfig.json 옵션

| 옵션 | 설명 |
|---|----------|
|include|TSC가 타입스크립트 파일을 찾을 디렉토리|
|lib|TSC가 실행 환경에서 이용할 수 있다고 가정하는 API(ES5의 Function.prototype.bind, ES2015의 Object.assign, DOM의 document.querySelector 등)|
|module|TSC가 코드를 컴파일할 대상 모듈 시스템(CommnJS, System JS, ES2015 등)|
|outDir|생성된 자바스크립트 코드를 출력할 디렉터리|
|strict|유효하지 않은 코드를 확인할 때 가능한 한 엄격하게 검사, 이 옵션을 이용하면 코드가 적절하게 타입을 갖추도록 강제할 수 있다. |
|target|TSC가 코드를 컴파일할 자바스크립트 버전(ES3, ES5, ES2015, ES2015 등)

- 명령행 옵션 ```./node_moules/.bin/tsc/ --help``` 

- tslint.json
- ```./node_modules/.bin/tslint --init```
```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "semicolon": false,
        "trailing-comma": false
    },
    "rulesDirectory": []
}
```

## index.ts
```
./node_modules/.bin/tsc
node ./dist/index.js
```
- ts-node 를 이용하면 명령 한 번으로 타입스크립트를 컴파일하고 





