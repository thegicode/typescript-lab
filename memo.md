- ts-node: node 상에서 typesciprt를 실행
- ts-jest:
  - Jest를 사용하여 TypeScript로 작성된 프로젝트를 테스트할 수 있도록 하는 Jest 변환기
  - https://kulshekhar.github.io/ts-jest/
  - npx ts-jest config:init

```
module.exports = {
    preset: "ts-jest", //trypeScript파일은 ts-jest에서 CommonJS구문으로 변환
    testEnvironment: "node", //테스트 환경
    testMatch: ["**/\*.spec.[jt]s?(x)", "**/\*.test.[jt]s?(x)"], //테스트 파일 위치
};
```

- vscode
  - jest, jest Runner를 설치
