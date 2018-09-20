// Advanced Doubly Linked List

var BasicDDL = require("./DoublyLinkedList.js");
var Node = BasicDDL.Node;
var DoublyLinkedList = BasicDDL.DoublyLinkedList;


//
DoublyLinkedList.prototype.find = function (value) {
  var currNode = this.head;
  while (currNode) {
    if (currNode.value === value) return currNode;
    currNode = currNode.right;
  }
  return null;
}

DoublyLinkedList.prototype.delete = function (node) {
  if (node === this.head && node === this.tail) {
    this.head = node.left = null;
    this.tail = node.right = null;
    return node;
  }
  if (node === this.head) this.head = node.right;
  if (node === this.tail) this.tail = node.left;
}