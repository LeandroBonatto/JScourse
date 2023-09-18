function contar() {
    let start = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let step = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Unable to count!'
        window.alert('[ERROR] Missing data!')
    } else {
        res.innerHTML = 'Counting: '
        let startNum = Number(start.value)
        let endNum = Number(end.value)
        let stepNum = Number(step.value)

        if (stepNum <= 0) {
            window.alert('Invalid step! Considering STEP 1')
            stepNum = 1
        }

        let c;  // Variable to hold the count

        if (startNum < endNum) {
            // Ascending count
            for(c = startNum; c <= endNum; c += stepNum) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Descending count
            for (c = startNum; c >= endNum; c -= stepNum) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `${c} \u{1F449}`
    }    
}