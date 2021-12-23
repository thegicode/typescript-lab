"use strict";
let log_signatrue = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
log_signatrue('good day');
log_signatrue('enjoy typescript', 'thegicode');
//# sourceMappingURL=signature.js.map