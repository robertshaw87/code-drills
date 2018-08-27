// Create a `Human` constructor function that takes in a name 
// and creates an object with that name and an age of 0
function Human(name){
  this.name = name;
  this.age = 0;
}

// Create a new Human object with a name of "Blake" and store it inside
// the variable `blake`
var blake = new Human("Blake");

// Set the age of `blake` to be 1 and add a new method `talk` by using the `prototype` property
// `talk` should be a function that takes in no arguments and console logs "Ma. Da."


// Call on the `talk` method of `blake`


// Set the age of `blake` to be 2 and add a new method `walk` by using the `prototype` property
// `walk` should be a function that takes in no arguments and console logs "Blake walked!"