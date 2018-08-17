// Activity 1


// Write a function `reverse` that takes in a string of words seperated
// by spaces and returns a new string that contains those words in
// reverse order


// ----------------------------------------------------------
//                      Reverse a Sentence
// ----------------------------------------------------------
function reverse(str) {
  // -------------------- Your Code Here --------------------

  var tempArr = str.split(" ")
  var reversedStr = tempArr[0];
  for (var i=1; i < tempArr.length; i++){
    reversedStr = tempArr[i] + " " + reversedStr;
  }
  return reversedStr;

  // --------------------- End Code Area --------------------
}



// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var teststr1 = "hello world hello"
console.log("The following should be \"hello world hello\"");
console.log(reverse(teststr1));
// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var teststr2 = "sentence"
console.log("The following should be \"sentence\"");
console.log(reverse(teststr2));
// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var teststr3 = "it does not matter how slowly you go as long as you do not stop"
console.log("The following should be \"stop not do you as long as go you slowly how matter not does it\"");
console.log(reverse(teststr3));
