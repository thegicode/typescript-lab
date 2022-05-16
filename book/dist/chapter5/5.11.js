"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalleFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
let Shoe = {
    create(type) {
        switch (type) {
            case 'balleFlat': return new BalleFlat;
            case 'boot': return new Boot;
            case 'sneaker': return new Sneaker;
        }
    }
};
Shoe.create('boot');
class RequestBuilder {
    constructor() {
        this.data = null;
        this.method = null;
        this.url = null;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    send() {
        console.log('send');
    }
}
new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();
//# sourceMappingURL=5.11.js.map