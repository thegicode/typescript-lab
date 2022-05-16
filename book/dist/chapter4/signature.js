"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let log = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
log('good day');
log('enjoy typescript', 'thegicode');
//# sourceMappingURL=signature.js.map