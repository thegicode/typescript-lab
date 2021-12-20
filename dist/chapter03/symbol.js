"use strict";
const e = Symbol('e'); // typeof e
const f = Symbol('f'); // typeof f
let g = Symbol('f'); // 에러 TS1332 : 'unique symbol' 타입은 반드시 'const' 여야 함
let h = e === e; // boolean
let i = e === f; // 에러 TS2367 : 'unique symbole' 타입은 서로 겹치는 일이 없으므로 이 비교문의 결과는 항상 'false'
//# sourceMappingURL=symbol.js.map