// Advanced Linked Lists
var LinkedList = require("./LinkedList.js");
var Node = require("./Node.js");

function findPrevious(head, targetNode) {
  var currNode = head;
  while (currNode !== null && currNode.getNext() !== targetNode) {
    currNode = currNode.getNext()
  }
  return currNode;
}

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

LinkedList.prototype.insertBefore = function(value, targetNode) {
  var newNode = newNode(value);
  newNode.setNext(targetNode);
  if (targetNode === this.head) {
    this.head = newNode;
    length++;
  } else {
    var prevNode = findPrevious(this.head, targetNode)
    if (prevNode !== null)
      prevNode.setNext(newNode);
  }
  return this;
}

module.exports = LinkedList;