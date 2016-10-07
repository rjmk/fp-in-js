// @flow

export type List<A> = Nil | Cons<A>

export type Nil =
  { fold: <A,B>(_: (a: A, b: B) => B, b: B) => B }

export type Cons<A> =
  { head: A
  , tail: List<A>
  , fold: <A,B>(f: (a: A, b: B) => B, _: B) => B
  }



export const MkNil: Nil = { fold: <A, B>(_: A, b: B): B => b }

export function MkCons<A>(head: A, tail: List<A>) {
  return (
    { head
    , tail
    , fold: <B>(f: (a: A, b: B) => B, b: B) => f(head, tail.fold(f, b))
    }
  )
}

export type ListBB<A> = <B>(f: (a: A, b: B) => B, b: B) => B

