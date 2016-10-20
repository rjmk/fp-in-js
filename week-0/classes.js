class myFoo {
}

class myBar {
    static foo() {
        return 3;
    }
    constructor (a, b) {
        this.x = a + b;
    }
}

const fooInstance = new myFoo
const otherFooInstance = new myFoo()
const barInstance = new myBar(1, 2)

console.log(fooInstance)
console.log(otherFooInstance)
console.log(barInstance)
console.log(barInstance.x)
console.log(myBar.foo())

// console.log(barInstance.foo())
// console.log(new myBar)