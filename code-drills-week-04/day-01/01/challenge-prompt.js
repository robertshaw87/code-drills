// Day 01
// Activity 01


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Write a function `cubeNum` that takes a number as an argument and 
// returns the cube of the argument

function cubeNum(num) {

  // -------------------- Your Code Here --------------------




  // --------------------- End Code Area --------------------

}

// Testing your `cubeNum` function
console.log("This should be 27 ", cubeNum(3));
console.log("This should be 64 ", cubeNum(4));
console.log("This should be 1331 ", cubeNum(11));



// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Write a function `twoAverage` that takes two numbers as arguments and
// returns the average of those two numbers

function twoAverage(num1, num2) {

  // -------------------- Your Code Here --------------------




  // --------------------- End Code Area --------------------

}

// Testing your `twoAverage` function
console.log("This should be 5 ", twoAverage(3, 7));
console.log("This should be 32 ", twoAverage(41, 23));
console.log("This should be 10.5 ", twoAverage(11, 10));



// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Write a function `prepend` that takes an array and an element as 
// arguments and adds the element to the front of the array and returns
// the updated array. The changes should be made directly to the argument
// and not to a copy.

function prepend(arr, elem) {

  // -------------------- Your Code Here --------------------
  



  // --------------------- End Code Area --------------------

  return arr;
}

// Testing your `prepend` function
var test1 = [43, 55, 2, 901, 12, 38];
console.log("The first element of this array should be 79 ", prepend(test1, 79));
var test2 = ["Hello", 11, true, "39", [1, 9], 55];
console.log('The first element of this array should be "Yes" ', prepend(test2, "Yes"));
var test3 = ["Array", {a: 23, b: "World"}, 85, false, 3];
console.log("The first element of this array should be true ", prepend(test3, true));



// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Write a function `addToObject` that takes an object, a key, and an array  
// as arguments and adds the array to the object as the value of the given key.
// Then, return the object.

function addToObject(obj, key, arr) {

  // -------------------- Your Code Here --------------------




  // --------------------- End Code Area --------------------
  return obj;
}

// Testing your `addToObject` function
var test1 = {a: 3, b: "Hello", c: true};
console.log('The value associated with the key "test1" should be [1, 4] ', addToObject(test1, "test1", [1, 4]));
var test2 = {keyOne: "Testing", keyTwo: "487", keyThree: 17};
console.log('The value associated with the key "c" should be [true, "Yes"] ', addToObject(test2, "c", [true, "Yes"]));



// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Write a function `strToArray` that takes a string as the argument and
// returns an array that consists of every word in that string. Punctuation
// will count as part of the word it's attached to. If a word appears twice
// in the string, it should appear twice in the array. 

// DO NOT use the `split` method.

function strToArray(str) {

  // -------------------- Your Code Here --------------------




  // --------------------- End Code Area --------------------
}

// Testing your `strToArray` function
// This should console log ["It", "was", "the", "best", "of", "times,"]
console.log(strToArray("It was the best of times,"));
// This should console log ["You're", "a", "wizard,"," "Harry!"]
console.log(strToArray("You're a wizard, Harry!"));


// ------------------------------------------------------------------
console.log("==================== Question 06====================");
// Write a function `getFullName` that takes two strings as arguments and
// returns a string with those two arguments concatenated together with a
// space in the middle.

function getFullName(firstName, lastName) {

  // -------------------- Your Code Here --------------------




  // --------------------- End Code Area --------------------
}

// Testing your `getFullName` function
console.log('This should be "John Smith"', getFullName("John", "Smith"));
console.log('This should be "Malcolm Reynolds"', getFullName("Malcolm", "Reynolds"));



// ------------------------------------------------------------------
console.log("==================== Question 07====================");
// Write a function `getFirstElem` that takes an array as an argument and
// returns the first element of that array.

function getFirstElem(arr) {

  // -------------------- Your Code Here --------------------




  // --------------------- End Code Area --------------------
}

// Testing your `getFirstElem` function
var test1 = [43, 55, 2, 901, 12, 38];
console.log('This should be 43 ', getFirstElem(test1));
var test2 = ["Hello", 11, true, "39", [1, 9], 55];
console.log('This should be "Hello"', getFirstElem(test2));