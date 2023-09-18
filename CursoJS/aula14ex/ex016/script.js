function check() {
    let start = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let step = document.getElementById('txtp')
    let res = document.getElementById('res')


    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossible to count!!'
        window.alert('[ERROR] Data is missing!')
        } else {
        res.innerHTML = 'Counting: '
        let i = Number(start.value)
        let e = Number(end.value)
        let s = Number(step.value)
        if (s <= 0) {
            window.alert('Invalid step! Considering STEP 1')
            s = 1
        }
        if (i < e) {
            // Count up
            for(let c = i; c <= e; c += s) {
                res.innerHTML += `${c} \u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`
        } else {
            // Countdown
            for (let c = i; c >= e; c -= s) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `${c} \u{1F449}`
    }
}
