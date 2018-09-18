// Advanced Linked Lists
var LinkedList = require("./LinkedList.js");
var Node = require("./Node.js");


LinkedList.prototype.find = function(value) {
  currNode = this.head;
  while (currNode !== null && currNode.getValue() !== value) {
    currNode = currNode.getNext();
  }
  return currNode;
}

LinkedList.prototype.insertAfter = function(value, targetNode) {
  var newNode = new Node(value);
  newNode.setNext(targetNode.getNext());
  targetNode.setNext(newNode);
  if (targetNode === this.tail) {
    this.tail = newNode;
  }
  this.length++;
}



module.exports = LinkedList;