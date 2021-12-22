
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrboth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrboth =  {
    name: 'Bonkers',
    purrs: true
}

// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true
}

// Both
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}

let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
}

// 실전에서는 intersection 보다 union을 자주 사용한다.
function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        return 'true'
    }
    return null
}

type Returns =  string | null

// function(a: string, b: number) {
//     return a || b
// }