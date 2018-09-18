// Linked List Constructor

var Node = require("node.js");

// This constructor function creates a `LinkedList`
// object that keeps track of the `head` and the
// `tail` of the `LinkedList`. If a value is passed
// in during initialization, it will create a `Node`
// with that value and assign it as the `head` and
// the tail. Otherwise, the `head` and the `tail`
// will be null.
function LinkedList(value = null) {
  // If the value isn't null, we create a new node
  // with the value.
  if (value !== null) {
    value = new Node(value);
  }
  // Assigning the `head` and the `tail` to be either
  // the new node we created, or null
  this.head = value;
  this.tail = value;
  // if we created this list with an initial value,
  // set length to 1, otherwise, the length is 0
  this.length = (value === null ? 0 : 1);
  // `getListHead` returns the node that's the `head`
  // of this list
  this.getListHead = function () {
    return this.head;
  }
  // `getListTail` returns the node that's the `tail`
  // of this list
  this.getListTail = function () {
    return this.tail;
  }
  // `insertAtHead` takes in an argument and creates
  // a new node with that argument as its value as the
  // new `head` of the list
  this.insertAtHead = function (value) {
    var newNode = new Node(value);
    newNode.setNext(this.head);
    this.head = newNode;
  }
  // `insertAtTail` takes in an argument and creates
  // a new node with that argument as its value as the
  // new `tail` of the list
  this.insertAtTail = function (value) {
    var newNode = new Node(value);
    this.tail.setNext(newNode);
    this.tail = newNode;
  }
}

// We're going to be adding on to this constructor, so
// so we will be exporting the constructor for later use
module.exports = Node;