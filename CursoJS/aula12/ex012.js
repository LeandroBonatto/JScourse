var atual = new Date()
var hour = atual.getHours()
console.log(`It is now exactly ${time} hours.`)
if (time < 12) {
     console.log('Good morning!')
} else if (time <= 18) {
     console.log('Good afternoon!')
} else {
     console.log('Good evening!')
}