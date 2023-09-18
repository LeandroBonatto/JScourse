function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > year) {
        window.alert('[ERROR] Check data and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gender = 'Male'
            if (age >= 0 && age < 10) {
                // Child
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                // Elderly
                img.setAttribute('src', 'senior-m.jpg')
            }
            } else if (fsex[1].checked) {
            gender = 'Female'
            if (age >= 0 && age < 10) {
                // Child
                img.setAttribute('src', 'bebe-f.jpg')
                } else if(age < 21) {
                    // Young
                img.setAttribute('src', 'jovem-f.jpg')
                } else if (age < 50) {
                    // Adult
                img.setAttribute('src', 'adulto-f.jpg')
                } else {
                 // Elderly
                img.setAttribute('src','idosa-f.jpg')
                }
            }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected ${gender} with ${age} years.`
        res.appendChild(img)
    }
}