"use strict";
// enum Language {
//     English, 
//     Spanish,
//     Russian
// }
// enum Language {
//     English = 0,
//     Spanish = 1
// }
// enum Language {
//     Russian = 2
// }
var Language;
(function (Language) {
    Language[Language["English"] = 100] = "English";
    Language[Language["Spanish"] = 500] = "Spanish";
    Language[Language["Russian"] = 501] = "Russian"; // 타입스크립트가 500 다음 숫자인 501로 추론
})(Language || (Language = {}));
var Color;
(function (Color) {
    Color["Red"] = "#c10000";
    Color["Blue"] = "#007ac1";
    Color[Color["Pink"] = 12648528] = "Pink";
    Color[Color["White"] = 255] = "White"; // 10진수 리터럴
})(Color || (Color = {}));
let red = Color.Red; // Color
let pink = Color.Pink; // Color
// let green = Color.Green 
// error TS2339: Property 'Green' does not exist on type 'typeof Color'.
let a = Color[255]; // string
let b = Color[6]; // string(!!!)
// 유효한 enum 키 접근
let c = 0 /* English */;
// 유효하지 않은 enum 키 접근
// let d = Language2.Tagalog
// error TS2339: Property 'Tagalog' does not exist on type 'typeof Language2'.
// 유효한 enum 키 접근
// let e = Language2[0]
// error TS2476: A const enum member can only be accessed using a string literal.
// 유효하지 않은 enum 키 접근
// let f = Language2[6]
// error TS2476: A const enum member can only be accessed using a string literal.
//# sourceMappingURL=enum.js.map