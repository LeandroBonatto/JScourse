let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let values = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Value ${num.value} added.`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Invalid value or already found in the list.');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (values.length == 0) {
        window.alert('Add values before finalizing!');
    } else {
        let tot = values.length;
        let largest = values[0];
        let smallest = values[0];
        let sum = 0;
        let average = 0;
        for (let pos in values) {
            sum += values[pos];
            if (values[pos] > largest)
                largest = values[pos];
            if (values[pos] < smallest)
                smallest = values[pos];
        }
        average = sum / tot;
        res.innerHTML = '';
        res.innerHTML += `<p>In total, ${tot} numbers has been registered</p>`;
        res.innerHTML += `<p>Largest value ${largest}</p>`;
        res.innerHTML += `<p>Smallest value ${smallest}</p>`;
        res.innerHTML += `<p>Sum of all values is ${sum}</p>`;
        res.innerHTML += `<p>The average is ${average}</p>`;
    }
}
