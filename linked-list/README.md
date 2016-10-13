# Linked List exercises

## Key concepts

Our introduction to linked lists should allow you to understand a few core concepts.
Some of these are to do with linked lists themselves.
Others (which are more important) are to do with functional programming generally.

If you can answer the following questions,
you should have a good understanding of the key ideas.

### Linked Lists

* What is the structure of a linked list?
(equivalently: What do the words `head`, `tail` and `cons` mean in the context of lists?)
* There is a special linked list. What is special about it?
(equivalently: What does the word `nil` mean in the context of lists?)

### General

* What is immutability?
* What is referential transparency?
* What is equational reasoning / the substitution model?
* What is a type parameter?

## What is a linked list?

* [Wikipedia's first couple of paragraphs are useful here][wiki]
* [This section from *Structure and Interpretation of Computer Programs* also has good information on linked lists][sicp],
but the book has already begun, so there may be too much missing context to be useful

[wiki]: https://en.wikipedia.org/wiki/Linked_list
[sicp]: https://mitpress.mit.edu/sicp/full-text/book/book-Z-H-15.html#%_sec_2.2.1

## Why do we care?

It's cheap to perform (some) operations on linked lists without changing the data.
Instead, we create new data that shares part of its structure with the old data.
Not changing / mutating data is an important concept in functional programming
because it allows us to use **equational reasoning**.

Equational reasoning means replacing expressions in a program with their definitions.
(This is also called the substitution model).
It doesn't matter which part of the program or when in the flow execution,
we can always replace the term with its definition.

This means that we can understand each piece of code on its own,
and build our understanding out of these pieces.
We don't have to worry about our old understanding becoming invalid with a change of context.

(The idea that the meaning of something only depends on the meaning of the things it is built out of is sometimes called "composition")

If we can reason about code in this way, it is said to be **referentially transparent**.
That is, when evaluating any piece of code, the result is the same regardless of the context.
This includes referencing variables
(the values of which should be the same as at their definition)
and calling functions
(the values of which should be the same every time).

