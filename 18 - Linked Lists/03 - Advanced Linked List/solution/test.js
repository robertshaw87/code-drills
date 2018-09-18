LinkedList = require("./AdvancedLinkedList.js");


function displayList(list) {
  var currNode = list.getListHead();
  var output = "";
  while(currNode !== null) {
    output += currNode.getValue() + " ";
    currNode = currNode.getNext();
  }
  return output;
}
test = new LinkedList();
for (var i=1; i<=10; i++) {
  test.insertAtTail(i);
}
console.log(displayList(test));


console.log("========== Test 1 ==========");
// Should be true
console.log(test.find(4).getNext().getValue() === 5);
// Should be true
console.log(test.find(20) === null);
// Should be true
console.log(test.find(1) === test.getListHead());
// Should be true
console.log(test.find(10) === test.getListTail());


console.log("========== Test 2 ==========");
var target = test.find(5);
test.insertAfter(6.5, target);
// Should be true
console.log(displayList(test) === "1 2 3 4 5 6.5 6 7 8 9 10 ");

test.insertAfter(1.5, test.getListHead());
// Should be true
console.log(displayList(test) === "1 1.5 2 3 4 5 6.5 6 7 8 9 10 ");

test.insertAfter(10.5, test.getListTail());
// Should be true
console.log(displayList(test) === "1 1.5 2 3 4 5 6.5 6 7 8 9 10 10.5 ");
