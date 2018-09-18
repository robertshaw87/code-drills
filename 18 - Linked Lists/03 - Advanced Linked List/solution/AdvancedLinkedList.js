// Advanced Linked Lists
var LinkedList = require("./LinkedList.js");


LinkedList.prototype.find = function(value) {
  currNode = this.getListHead();
  while (currNode.getValue() !== value && currNode !== null) {
    currNode = currNode.getNext();
  }
  return currNode;
}


module.exports = LinkedList;