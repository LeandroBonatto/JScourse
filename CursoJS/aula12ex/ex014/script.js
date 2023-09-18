function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var date = new Date()
var hour = date.getHours()
msg.innerHTML = `Time is ${hour} o'clock!`
if (hour >= 0 && hour < 12) {
    // GOOD MORNING!
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hour >= 12 && hour < 18) {
    // GOOD AFTERNOON!
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    // GOOD EVENING!
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
}
}

