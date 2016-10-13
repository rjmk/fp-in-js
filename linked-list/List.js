// @flow

// This our definition of our Linked List type
// There are two cases: either an empty list or a value followed by a linked list
export type List<A> = Nil | Cons<A>

// We'll start our typing adventure by just using a 'type' field on an object
export type Nil =
  { type: 'Nil' }

export type Cons<A> =
  { type: 'Cons', head: A, tail: List<A> }

// Unfortunately, due to some limitations of flow,
// we can't call the value of type `Nil` `Nil`.
// We call it `MkNil` here, even though this is not a function

export const MkNil = { type: 'Nil' }

// MkCons is used for creating a Cons value

export const MkCons = <A>(head: A, tail: List<A>): List<A> => (
  { head
  , tail
  , type: 'Cons'
  }
)


// Once you've played around with the above,
// maybe have a look at this version of a linked list
// It is slightly more idiomatic to a functional style
export type ListC<A> = NilC | ConsC<A>

export type NilC =
  { fold: <B>(_: *, b: B) => B }

export type ConsC<A> =
  { fold: <B>(f: (a: A, b: B) => B, _: B) => B
  , head: A
  , tail: ListC<A>
  }

export const MkNilC: NilC = { fold: <A, B>(_: A, b: B): B => b }

export const MkConsC = <A>(head: A, tail: ListC<A>): ListC<A> => (
  { fold: (f, b) => f(head, tail.fold(f, b))
  , head
  , tail
  }
)


// As an extension, have a look at this.
// Can you define the function ConsBB?
// Does this type capture everything about a linked list or are we missing something?
export type ListBB<A> = <B>(f: (a: A, b: B) => B, b: B) => B

declare type MkNilBB = ListBB<*>
declare function ConsBB<A>(head: A, tail: ListBB<A>): ListBB<A>

