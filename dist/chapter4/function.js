"use strict";
function log(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');
function log2(message, userId = 'Not signed in') {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}
log('User clicked on a button', 'da763be');
log('User signed out');
function log3(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}
//# sourceMappingURL=function.js.map