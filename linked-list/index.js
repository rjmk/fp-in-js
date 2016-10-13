//@flow

import { deepEqual } from 'assert'


import type { List } from './List'
import { MkCons, MkNil } from './List'

/* For the following exercises, see if you can write functions which
match the required signature and the tests. */

declare function last <A>(as: List<A>): A
deepEqual(last(MkCons(3, MkCons(4, MkCons(1, MkNil)))), 1) // eslint-disable-line


declare function penultimate <A>(as: List<A>): A
deepEqual(penultimate(MkCons(3, MkCons(4, MkCons(1, MkNil)))), 4) // eslint-disable-line

declare function reverse <A>(as:List<A>): A
deepEqual // eslint-disable-line
  ( reverse(MkCons(3, MkCons(4, MkCons(1, MkNil))))
  , MkCons(1, MkCons(4, MkCons(4, MkNil))))

declare function flatten <A>(as: List<List<A>>): List<A>
deepEqual // eslint-disable-line
  ( flatten(MkCons(MkCons(3, MkNil), MkCons(MkCons(4, MkNil), MkCons(1, MkNil))))
  , MkCons(3, MkCons(4, MkCons(1, MkNil))))

declare function map <A, B>(f: (a: A) => B, as: List<A>): List<B>
deepEqual // eslint-disable-line
  ( map(x => String(x), MkCons(3, MkCons(4, MkCons(1, MkNil))))
  , MkCons("3", MkCons("4", MkCons("1", MkNil))))

