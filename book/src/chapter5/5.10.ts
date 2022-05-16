

// class MessageQueue {
//     private constructor(private messages: string[]) { }
// }

// class BadQueue extends MessageQueue { }
//  error TS2675: Cannot extend a class 'MessageQueue'. Class constructor is marked as private.


// 반면, final 클래스는 상속만 막을 뿐 인스턴스는 정상적으로 만들 수 있다. 이 문제 해결
class MessageQueue {
    private constructor(private messages: string[]) {}
    static create(messages: string[]) {
        return new MessageQueue(messages)
    }
}
// class BadQueue extends MessageQueue {}
// error TS2675: Cannot extend a class 'MessageQueue'. Class constructor is marked as private.
MessageQueue.create([])

export {}