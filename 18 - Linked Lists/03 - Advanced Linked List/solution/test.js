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
// Should be 5
console.log(test.find(4).getNext().getValue());
// Should be true
console.log(test.find(20) === null);
// Should be true
console.log(test.find(1) === test.getListHead());
// Should be true
console.log(test.find(10) === test.getListTail());

console.log("========== Test 2 ==========");
var target = test.find(5);
test.insertAfter(6.5, target);
console.log(displayList(test))
