
function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

log ('Page loaded')
//3:41:13 ├F10: PM┤ Page loaded Not signed in

log('User signed in', 'da763be')
// 3:41:14 ├F10: PM┤ User signed in da763be
