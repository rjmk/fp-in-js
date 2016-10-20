// @flow

const x: number = 4;
const y: number = 4;

const z = x + y;

function add (a: number, b: number): number {
    return a + b;
}

add(x, y);

// (z: string)
// add(3, "hello")