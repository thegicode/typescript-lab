
/** 1. Factory Pattern */

type Shoe = {
    purpose: string
}

class BalleFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodcutting'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}
// 이 예에서는 type을 사용했는데 대신 인터페이스를 사용해도 된다.


let Shoe = {
    create(type: 'balleFlat' | 'boot' | 'sneaker'): Shoe {  // 1
        switch(type) {  // 2
            case 'balleFlat': return new BalleFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}
// 1. type을 유니온 타입으로 지정해서 컴파일 타입에 호출자가 유효하지 않는 type을 전달하지 못하도록 방지해 .create의 타입 안전성을 최대한 강화했다.
// 2. switch문을 이용해 누락된 Shoe 타입이 없는지 타입스크립트가 쉽게 확인 할 수 있게 한다.
// 컴페니언 객체 페턴으로 타입 Shoe와 값 Shoe를 같은 이름으로 선언했다. (타입스크립트는 값과 타입의 네이스페이스를 따로 관리한다.)

Shoe.create('boot')


/** 2. Builder Pattern */

class RequestBuilder {
    private data: object | null = null
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }
    setData(data: object): this {
        this.data = data
        return this
    }
    setURL(url: string): this {
        this.url = url
        return this
    }
    send() {
        console.log('send')
    }
}

new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData( {firstName: 'Anna'} )
    .send()


export {}