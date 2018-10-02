// Dynamic Data Analysis


// `DataTracker` returns statistical analysis on data it tracks
class DataTracker {
  constructor() {
    this.modeObj = {};
    this.modeCount = 0;
    this.mode = [];
    this.count = 0;
    this.sum = 0;
    this.min = null;
    this.max = null;
  }

  insert(value) {
    this.modeObj[value] = this.modeObj[value] ? this.modeObj[value] + 1 : 1;
    if (this.modeObj[value] > this.modeCount) {
      this.mode = [value];
      this.modeCount = this.modeObj[value];
    } else if (this.modeObj[value] === this.modeCount) {
      this.mode.push(value);
    }
    this.count++;
    this.sum += value;
    this.min = (this.min === null) ? value : Math.min(this.min, value);
    this.max = (this.max === null) ? value : Math.max(this.max, value);
  }

  getMean() {
    return this.sum/this.count;
  }

  getMin() {
    return this.min;
  }

  getMax() {
    return this.max;
  }

  getMode() {
    return this.mode;
  }
}


// Tests
// All tests should be true
//
const arrEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
const test = new DataTracker();
test.insert(5)
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(test.getMean() === 5);
console.log(test.getMax() === 5);
console.log(test.getMin() === 5);
console.log(arrEqual(test.getMode(), [5]));

test.insert(7)
// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(test.getMean() === 6);
console.log(test.getMax() === 7);
console.log(test.getMin() === 5);
console.log(arrEqual(test.getMode(), [5, 7]));

test.insert(3)
// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(test.getMean() === 5);
console.log(test.getMax() === 7);
console.log(test.getMin() === 3);
console.log(arrEqual(test.getMode(), [5, 7, 3]));

test.insert(7)
// ------------------------------------------------------------
console.log("==================== Test 4 ====================");
console.log(test.getMean() === 5.5);
console.log(test.getMax() === 7);
console.log(test.getMin() === 3);
console.log(arrEqual(test.getMode(), [7]));
