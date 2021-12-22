

function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

log ('Page loaded')
//3:41:13 ├F10: PM┤ Page loaded Not signed in

log('User signed in', 'da763be')
// 3:41:14 ├F10: PM┤ User signed in da763be


/** 매개변수에 기본값 지정 */
function log2(message: string, userId = 'Not signed in') {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}
log('User clicked on a button', 'da763be')
// 3:53:53 ├F10: PM┤ User clicked on a button da763be
log('User signed out')
// 3:53:53 ├F10: PM┤ User signed out Not signed in


/** 기본 매개변수에 타입 지정 */
type Context = {
    addId?: string
    userId?: string
}
function log(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
}