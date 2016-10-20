const myArray = [ 1, 2, 3 ]

console.log(myArray.map(x => x + 1))
console.log(myArray.map(x => String(x)))
console.log(myArray.reduce((sum, x) => x + sum))

// console.log(myArray.map(x => { x + 2 }))
// console.log(myArray.map(x => if (x === 1) { return 0 } else { return x }))
// console.log(myArray.reduce(word, x => word + x))
