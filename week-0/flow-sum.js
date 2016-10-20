// @flow

// We won't make sum types out of existing types very often
// ... but to start us off!
type NumOrString = number | string

const x: NumOrString = 3
const y: NumOrString = "hello"
// const z: NumOrString = []

type NumOrNums = number | Array<number> | Object

const w: NumOrNums = 5
const z: NumOrNums = [1, 2, 3, 4]
// const a: numOrNums = "yo"

// Classes automatically have types associated with them!

type IsItOn = YesItIs | NoItIsnt

// The fact these classes have different types despite having the same structure
// is called "nominal typing" (the name is not important)
// It is unique to classes in flow
class YesItIs {}
class NoItIsnt {}

class Blah {}

const b: IsItOn = new NoItIsnt()
// const c: IsItOn = new Blah()

// Let's play around with type parameters

// Only one param

type OneStringOrSeveralAnything<A> = string | Array<A>

// The '*' means work it out for yourself, flow!
const d: OneStringOrSeveralAnything<*> = "hi"
const e: OneStringOrSeveralAnything<number> = [1, 2]
const f: OneStringOrSeveralAnything<Object> = [{}, {}]
// const g: OneStringOrSeveralAnything<*> = 33

// Classes can have params as well!

class ThisGuy<A> {
    val: A

    constructor (x: A) {
        this.val = x
    }
}

class ThatGuy<A> {
    val: A

    constructor (x: A) {
        this.val = x
    }
}

// A phantom parameter :ghost:

type AG_G_G_Ghost<A> = number | string

const h: AG_G_G_Ghost<Array<number>> = "sup"
// (h: AG_G_G_Ghost<string> //(we've already declared a different type)

// Multiple parameters (we'll meet these guys again)

type WhichGuy<A, B> = ThisGuy<A> | ThatGuy<B>

const oneOfTheGuys: WhichGuy<AG_G_G_Ghost<IsItOn>, string> = new ThatGuy("goodbye")
