# Repo for the Clientside FP Club

This is some setup for us to do typed functional programmin in JavaScript.
Some words from Dr Boolean to give us some context:

**[Why FP][why-fp]**

**[Why types][why-types]**
(We're using flow as there is no Hindley Milner typechecker for JavaScript)

[why-fp]: https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch1.md
[why-types]: https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch7.md

## Usage

I have made lots of stuff that should really be peer deps as dev deps.
This means you can just clone this repo and `npm i` and get everything you need.
(It will take a few minutes).

Try running the test script `npm t / npm test`.
This will take a little while on the first run, but will be quick thereafter.
Also try `npm start`
(you should get a "I'm working" message in the console).

I've aliased a couple of modules as npm scripts.
This means you don't have to do `./node_modules/.bin/flow myFile.js` or whatever.
Instead you can `npm run flow -- myFile.js`.
Or, **to run code**, `rpm run babel -- myFile.js`.
(Okay, maybe not a HUGE improvement).

**Have a play around in `week-0`.**

Please let me know if you have any issues with getting all of this setup!

### Apologies for the dependencies
I know we have 'JavaScript fatigue',
but this seemed the way that was quickest for me and you of getting setup.

## Groundwork

We're set up to use whichever features of ESWhenever that we feel the need for.
Flow is in place.
Everything should be as pure as possible

### Apologies for the classes

To make flow happy, we're going to be using classes.
It's a bit gross, but it works.

## Plan of attack

I thought we might start with
(bold indicates more likely things to include):
* **Linked list exercises**
* Binary tree exercises
* Probably just head to 'FP in Scala' for the following
  * **Optionality & Totality**
  * Functional interfaces: Semigroup & Monoid
  * Functional interfaces: Functor
  * Etc

## Tentative schedule

Weekly, Fridays, 2-3?

