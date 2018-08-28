// Longest substring



// This function takes in a string and returns the longest substring that doesn't
// contain 
function longestSubstring(str) {
  var longest = "";
  var current = "";

  for (var i=0; i<str.length; i++) {
    var tempIndex = current.indexOf(str[i]);
    if (tempIndex !== -1) {
      if (longest.length < current.length){
        longest = current;
      }
      current = current.substr(tempIndex + 1) + str[i];
    } else {
      current += str[i]
    }
  }

  if (longest.length < current.length){
    longest = current;
  }

  return longest;
}

console.log(longestSubstring("abcabcbb"))