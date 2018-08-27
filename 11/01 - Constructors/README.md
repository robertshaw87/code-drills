# It's all in the cards

### In this activity, we're going to be making a deck of cards using constructor functions.

* There should be two constructors we're defining for this activity: a `Deck` and a `Card`.

* `Card`s should be created with a value that is an integer from 1 to 13 and have a `print` function that displays a pretty representation of the card and its value.

* `Deck`s should be created with an initial array of `Card`s (this argument should be optional). They should have:
    * A `count` function that returns the number of Cards in the Deck
    * A `shuffle` function that shuffles the order of the Cards within the Deck
    * A `draw` function that draws the top Card of the Deck and returns that Card (this should also remove that Card from the Deck)
    * An `add` function that adds a Card into the Deck and `shuffle`s the Deck afterwards.

* Comment out the test cases if you want to see your function run before you finish. They are there to help you ensure