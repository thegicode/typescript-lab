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
function flip(f) {
    return 'flipped it';
}
flip("Chair" /* Chair */);
flip("Cup" /* Cup */);
// flip(12)
// error TS2345: Argument of type '12' is not assignable to parameter of type 'Flippable'.
// flip('Hat')
// error TS2345: Argument of type '"Hat"' is not assignable to parameter of type 'Flippable'.
//# sourceMappingURL=enum.js.map