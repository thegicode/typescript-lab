
/** Symbol.iterator와 next를 구현하는 객체(또는 클래스)를 만들어 
 *  반복자나 이터러블을 직접 정의할 수 있다. */
let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10 ; n++) {
            yield n
        }
    }
}
// numbers는 이터러블이며,
// 제너레이터 함수 numbers.[Symbol.iterator()]를 호출하면 이터러블 반복자가 반환된다.
console.log([...numbers])
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]

/** 자바스크립트 내장 컬렉션 타입(Array, Map, Set, String 등) */
// for-of로 반복자 반복하기
for (let a of numbers) {
    console.log(a)
    // 1, 2, 3 등
}

// 반복자 스프레드
let allNumbers = [...numbers]   // number[]
console.log(allNumbers)
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]

// 반복자 구조 분해 할당(destructure)
let [one, two, ...rest] = numbers
// [one, two, number[]]