"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = [1];
// [이름, 성씨, 생년] 튜플
let b = ['malcolm', 'glawell', 1963];
// b = ['queen', 'elizbeth', 'il', 1926]   
// error TS2322: Type 'string' is not assignable to type 'number'.
// 선택형 요소 지원
// 방향에 따라 다른 값을 갖는 기차 요금 배열
let trainFares = [
    [3.75],
    [8.25, 7.70],
    [20.50]
];
let moreTrainFares = [
// ...
];
// 튜플이 최소 길이를 갖도록 지정할 때는 나머지 요소(...)를 사용
let friends = ['Sara', 'Tali', 'Choloe', 'Claire'];
// 이형 배열
let list = [1, false, 'a', 'b', 'c'];
// 읽기 전용 배열과 튜플
let as = [1, 2, 3]; // readonly number[]
let bs = as.concat(4); // readonly number[]
let three = bs[2]; // number
// as[4] = 5   
// error TS2542: Index signature in type 'readonly number[]' only permits reading.
as.push(6);
//# sourceMappingURL=tuple.js.map