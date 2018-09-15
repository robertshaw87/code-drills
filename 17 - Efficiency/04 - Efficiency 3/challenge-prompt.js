// Efficiency 3



// -------------------- Question 3 --------------------
//
// `countCons` takes a string as the argument and returns 
// the number of consonants in that string.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

  



   --------------- END ANSWER AREA ---------------- */
function countCons(str) {
  str = str.toLowerCase();
  var cons = 'bcdfghjklmnpqrstvwxyz'
  var numCons = 0;
  for (var i=0; i<str.length; i++) {
    if (cons.includes(str[i])) {
      numCons++;
    }
  }
  return numCons;
}



// -------------------- Question 3 --------------------
//
// `reverse` takes a strings consisting of words seperated
// by spaces as the argument and returns a new string with
// the words in reverse order.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

  



   --------------- END ANSWER AREA ---------------- */
function reverse(str) {
  var tempArr = str.split(" ")
  tempArr = tempArr.reverse();
  var reversedStr = tempArr.join(" ");
  return reversedStr;
}



// -------------------- Question 3 --------------------
//
// `anagramCheck` takes two strings as arguments and returns 
// whether they are anagrams of each other, ignoring spaces.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

  



   --------------- END ANSWER AREA ---------------- */
function anagramCheck (str1, str2) {
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return (str1 == str2);
}