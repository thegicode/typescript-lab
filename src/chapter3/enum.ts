
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

enum Language {
    English = 100,
    Spanish = 200 + 300,
    Russian     // 타입스크립트가 500 다음 숫자인 501로 추론
}

enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,    // 16진수 리터럴
    White = 255         // 10진수 리터럴
}

let red = Color.Red     // Color
let pink = Color.Pink   // Color
// let green = Color.Green 
// error TS2339: Property 'Green' does not exist on type 'typeof Color'.
let a = Color[255]  // string
let b = Color[6]    // string(!!!)
// Color[6]은 접근할 수 없어야 한다. -> const enum을 이용

const enum Language2 {
    English,
    Spanish,
    Russian
}

// 유효한 enum 키 접근
let c = Language2.English

// 유효하지 않은 enum 키 접근
// let d = Language2.Tagalog
// error TS2339: Property 'Tagalog' does not exist on type 'typeof Language2'.

// 유효한 enum 키 접근
// let e = Language2[0]
// error TS2476: A const enum member can only be accessed using a string literal.

// 유효하지 않은 enum 키 접근
// let f = Language2[6]
// error TS2476: A const enum member can only be accessed using a string literal.

const enum Flippable {
    Burget = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
}
function flip(f: Flippable) {
    return 'flipped it'
}
flip(Flippable.Chair)
flip(Flippable.Cup)
// flip(12)
// error TS2345: Argument of type '12' is not assignable to parameter of type 'Flippable'.
// flip('Hat')
// error TS2345: Argument of type '"Hat"' is not assignable to parameter of type 'Flippable'.
