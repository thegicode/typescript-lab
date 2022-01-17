
interface Animal {
    // readonly name: string
    eat(food: string): void
    sleep(hours: number): void
}

class Cat implements Animal {
    eat(food: string) {
        console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
}
// Cat은 Animal이 선언하는 모든 메서드를 구현해야 하며, 필요하다면 메서드나 프로퍼티를 추가로 구현할 수 있다.

interface Feline {
    meow(): void
}

class Cat2 implements Animal, Feline {
    eat(food: string) {
        console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
    meow() {
        console.info('Meow')
    }
}



export {}