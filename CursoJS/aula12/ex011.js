var age = 22
console.log(`You are ${age} years old.`)
if (age < 16) {
     console.log('No vote')
}

else if (age < 18 || age > 65) {
         console.log('Optional vote')
     } else {
         console.log('Required Vote')
    }
