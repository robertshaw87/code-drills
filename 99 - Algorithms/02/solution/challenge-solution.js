// Binary Distance


//---------------------------------------------------------
//                     Helper Functions
//
// -------------------- Your Code Here --------------------

// `toBinary` takes in a positive integer and returns its binary representation as a string
function toBinary(num) {
  var bin = "";
  while (num > 0) {
    bin = num%2 + bin;
    num = Math.floor(num/2);
  }
  return bin ? bin : "0";
}

// -------------------- End Code Area ---------------------


// `binaryDistance` takes in a positive integer as an argument and returns the maximum distance between 1s in the bitwise complement of the binary representation of that number
function binaryDistance(num) {
  // -------------------- Your Code Here --------------------
  var binaryNum = toBinary(num);
  var maxDistance = 0;
  var currDistance = 0;
  for (var i=0; i<binaryNum.length; i++) {
    if (binaryNum[i] === "0") {
      maxDistance = Math.max(maxDistance, currDistance);
      currDistance = 0;
    }
    currDistance++;
  }
  return maxDistance;
  // -------------------- End Code Area ---------------------
}

console.log("========== Test ==========");
// Should be true
console.log(binaryDistance(46) == 4)
// Should be true
console.log(binaryDistance(3) == 0)