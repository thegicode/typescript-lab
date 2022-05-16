"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language;
(function (Language) {
    Language[Language["English"] = 100] = "English";
    Language[Language["Spanish"] = 500] = "Spanish";
    Language[Language["Russian"] = 501] = "Russian";
})(Language || (Language = {}));
var Color;
(function (Color) {
    Color["Red"] = "#c10000";
    Color["Blue"] = "#007ac1";
    Color[Color["Pink"] = 12648528] = "Pink";
    Color[Color["White"] = 255] = "White";
})(Color || (Color = {}));
let red = Color.Red;
let pink = Color.Pink;
let a = Color[255];
let b = Color[6];
let c = 0;
function flip(f) {
    return 'flipped it';
}
flip("Chair");
flip("Cup");
//# sourceMappingURL=enum.js.map