"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageQueue {
    constructor(messages) {
        this.messages = messages;
    }
    static create(messages) {
        return new MessageQueue(messages);
    }
}
MessageQueue.create([]);
//# sourceMappingURL=5.10.js.map