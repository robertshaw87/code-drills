// Defining the card constructor function
//
// -------------------- Your Code Here --------------------

function Card(value) {
  if (value >= 1 && value <= 13) {
    this.value = value;
  } else {
    this.value = 1;
  }
  this.print = function() {
    var printValue = this.value<10 ? "0" + this.value : this.value;
    console.log(`
    -----------
    |${printValue}       |
    |         |
    |         |
    |         |
    |         |
    |       ${printValue}|
    -----------
    `)
  }
}

// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------

function Deck(cards = []) {
  this.cards = cards;
  this.count = function () {
    return this.cards.length;
  }
  this.shuffle = function() {
    for (var i = this.cards.length - 1; i >= 0; i--) {
      var randIndex = Math.floor(Math.random()*(i+1));
      var tempCard = this.cards[i];
      this.cards[i] = this.cards[randIndex];
      this.cards[randIndex] = tempCard;
    }
  }
  this.draw = function () {
    return this.cards.pop();
  }
  this.add = function(card) {
    this.cards.push(card);
    this.shuffle();
  }
}

// --------------------- End Code Area --------------------



// // ------------------------------------------------------------------
// console.log("\n==================== Test 01 ====================");
// console.log("\nThe following should print the card number 5:");
// var testCard = new Card(5)
// testCard.print();

// // ------------------------------------------------------------------
// console.log("\n==================== Test 02 ====================");
// console.log("\nThe following should print the card number 10:");
// var testDeck = new Deck([new Card(10)]);
// testDeck.draw().print();

// // ------------------------------------------------------------------
// console.log("\n==================== Test 03 ====================");
// console.log("\nThe following should be undefined:");
// console.log(typeof testDeck.draw());
// console.log("\nThe following should be 0:");
// console.log(testDeck.count());

// // ------------------------------------------------------------------
// console.log("\n==================== Test 04 ====================");
// console.log("\nThe following should be 1:");
// testDeck.add(new Card(7));
// console.log(testDeck.count());
// console.log("\nThe following should print the card number 7");
// testDeck.draw().print();

// // ------------------------------------------------------------------
// console.log("\n==================== Test 05 ====================");
// console.log("\nThe following should print the cards 1, 2, 3, 4, and 5 in random order");
// for (var i=1; i<=5; i++) {
//   testDeck.add(new Card(i));
// }
// var deckSize = testDeck.count();
// for (var i=0; i<deckSize; i++) {
//   testDeck.draw().print();
// }
