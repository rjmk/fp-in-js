// @flow

const x: Array<number> = [1, 2, 4]
const y: Array<string> = [ "hello", "cat", "4"]

const z = x.map(String)

function double (xs: Array<number>): Array<number> {
    return xs.map(x => x * 2)
}

double(x)

// `A` is a *type variable*
function mapTwice<A>(f: (a: A) => A, xs: Array<A>): Array<A> {
    return xs.map(f).map(f);
}

mapTwice(x => x * 2, x)

// (z: Array<number>)
// double(y)
// mapTwice(x => x * 2, y)

