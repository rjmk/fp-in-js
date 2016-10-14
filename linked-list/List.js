// @flow

// This our definition of our Linked List type
// There are two cases: either an empty list or a value followed by a linked list
export type List<A> = Nil | Cons<A>

export class Nil {}

export class Cons<A> {
  head: A
  tail: List<A>
  constructor (head: A, tail: List<A>) {
    this.head = head
    this.tail = tail
  }
}

// Once you've played around with the above,
// maybe have a look at this version of a linked list
// It is slightly more idiomatic to a functional style
export type ListC<A> = NilC | ConsC<A>

export class NilC {
  static fold: <B>(_: *, b: B) => B
}

export class ConsC<A> {
  head: A
  tail: ListC<A>
  static fold: <B>(f: (a: A, b: B) => B, _: B) => B
  constructor (head: A, tail: ListC<A>) {
    this.head = head
    this.tail = tail
  }
}

// As an extension, have a look at this.
// Can you define the function ConsBB?
// Does this type capture everything about a linked list or are we missing something?
export type ListBB<A> = <B>(f: (a: A, b: B) => B, b: B) => B

declare type MkNilBB = ListBB<*>
declare function ConsBB<A>(head: A, tail: ListBB<A>): ListBB<A>

