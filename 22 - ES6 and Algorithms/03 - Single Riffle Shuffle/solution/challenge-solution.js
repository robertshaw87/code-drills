// Single Riffle Shuffle


// Given three arrays where the first is a full deck and the second and third are halves of that deck
// `checkShuffle` returns true if the full deck is achievable from a single riffle shuffle of the two halves
const checkShuffle = (deck, half1, half2) => {
  let index1 = 0;
  let index2 = 0;
  let isRiffle = true;
  deck.forEach(elem => {
    if ((index1 < half1.length) && elem === half1[index1]) {
      index1++;
    } else if ((index2 < half2.length) && elem === half2[index2]) {
      index2++;
    } else 
      isRiffle = false;
  });
  return (isRiffle && (index1 === half1.length) && (index2 === half2.length))
}



// Tests
// All tests should be true
// --------------------------------------------------------------
console.log("==================== Test 01 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,3,5,7 ];
var half2 = [ 2,4,6,8 ];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 02 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,2,3,4,5,6,7,8 ];
var half2 = [];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 03 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,2,3,4 ];
var half2 = [ 5,6,7,8 ];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 04 ====================");
var deck = [ 1,1,2,2,2,3,4,4 ];
var half1 = [ 1,2,2,4 ];
var half2 = [ 1,2,3,4 ];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 05 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,3,5 ];
var half2 = [ 2,4,6 ];
console.log(checkShuffle(deck, half1, half2) === false);

// --------------------------------------------------------------
console.log("==================== Test 06 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,2,5,7 ];
var half2 = [ 3,4,8,6 ];
console.log(checkShuffle(deck, half1, half2) === false);
