LinkedList = require("./AdvancedLinkedList.js")


function displayList(list) {
  var currNode = list.getListHead();
  var output = "" + currNode.getValue();
  do {
    currNode = currNode.getNext();
    output += " " + currNode.getValue();
  } while (currNode !== null);
  console.log(output);
  return output;
}

test = new LinkedList();
for (var i=1; i<=10; i++) {
  test.insertAtTail(i)
}
console.log(displayList(test))

console.log("========== Test 1 ==========")