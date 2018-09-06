# Finding the rotation index

### You are given an array of integers where if you take the front portion of it before the rotation index and the back portion of it after and including the rotation index and create a new array with the back sub-array in front of the front sub-array, you would end up with an array of integers sorted from lowest to highest.

* Find the rotation index where this occurs.

* After you've filled in the logic for the function inside `challenge-prompts.js`, run the test.js file in order to check your output.

```javascript
var arr1 = [4, 5, 6, 7, 8, 1, 2, 3, 4];
console.log(rotIndex(arr1)); // = 5

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotIndex(arr2)); // = 0

var arr3 = [34, 87, 90, 5, 17, 22, 29, 31, 33];
console.log(rotIndex(arr3)); // = 3

var arr4 = [34, 87, 90, 95, 117, 122, 129, 131, 3];
console.log(rotIndex(arr4)); // = 8
```
