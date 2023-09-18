let friend = {name: 'Mario',
gender: 'M',
weight: 85.4,
getweight(p=0) {
     console.log('Got weight')
     this.weight += p
}}

friend.getweight(2)
console.log(`${friend.name} weighs ${friend.weight}Kg`)



