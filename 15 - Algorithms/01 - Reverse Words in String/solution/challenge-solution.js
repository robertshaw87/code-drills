// Reverse Words


// Write a function `reverseWords` that takes in a sentence as a string and
// reverses the words within the sentence. Each word within the sentence is
// seperated by a space and you can assume there will not be more than one
// space between words.
function reverseWords(str){
  sentence = str.split(" ");
  for (var i=0; i<sentence.length; i++) {
    sentence[i] = sentence[i].split("").reverse().join("");
  }
  return sentence.join(" ");
}

console.log(reverseWords("Our lives are defined by opportunities, even the ones we miss."))
console.log(reverseWords("Failure will never overtake me if my determination to succeed is strong enough."))