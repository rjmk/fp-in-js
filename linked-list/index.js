//@flow

import { deepEqual } from 'assert'


import type { List } from './List'
import { Cons, Nil } from './List'

/* For the following exercises, see if you can write functions which
match the required signature and the tests. */

declare function last <A>(as: List<A>): ?A
deepEqual(last(new Cons(3, new Cons(4, new Cons(1, new Nil)))), 1) // eslint-disable-line


declare function penultimate <A>(as: List<A>): ?A
deepEqual(penultimate(new Cons(3, new Cons(4, new Cons(1, new Nil)))), 4) // eslint-disable-line

declare function reverse <A>(as:List<A>): List<A>
deepEqual
  ( reverse(new Cons(3, new Cons(4, new Cons(1, new Nil))))
  , new Cons(1, new Cons(4, new Cons(3, new Nil))))

declare function flatten <A>(as: List<List<A>>): List<A>
deepEqual
  ( flatten(new Cons(new Cons(1, new Cons(3, new Nil)), new Cons(new Cons(4, new Nil), new Cons(1, new Nil))))
  , new Cons(3, new Cons(4, new Cons(1, new Nil))))

declare function map <A, B>(f: (a: A) => B, as: List<A>): List<B>
deepEqual
  ( map(x => String(x), new Cons(3, new Cons(4, new Cons(1, new Nil))))
  , new Cons("3", new Cons("4", new Cons("1", new Nil))))

