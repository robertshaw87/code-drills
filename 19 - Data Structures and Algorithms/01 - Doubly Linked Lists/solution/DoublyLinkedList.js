// Doubly Linked List


// `Node` constructor that can initialize with a value
// All values default to null
function Node(value = null) {
  this.value = value;
  this.left = null;
  this.right = null;
}


// `DoublyLinkedList` constructor
// All values default to null
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;

  
  // The `insertBefore` method takes a value and a node as argument and inserts a new node containing the argument value before the argument node
  this.insertBefore = function (value, node) {
    // Create a new node with the value passed as argument
    var newNode = new Node(value);
    // If the target node is the head, set the newNode to be the new head
    if (node === this.head) this.head = newNode;
    // Set the right pointer of the new node to be the target node
    newNode.right = node;
    // Set the left pointer of the new node to be the node the left pointer of the target node used to point to
    newNode.left = node.left;
    // If the left node of the target node isn't null, set that left node's right pointer to be the new node
    if (node.left !== null) node.left.right = newNode;
    // Set the left pointer of the target node 
    node.left = newNode;
    // return `this` to allow for method chaining
    return this;
  }


  // The `insertBefore` method takes a value and a node as argument and inserts a new node containing the argument value after the argument node
  this.insertAfter = function (value, node) {
    // Create a new node with the value passed as argument
    var newNode = new Node(value);
    // If the target node is the tail, set the newNode to be the new tail
    if (node === this.tail) this.tail = newNode;
    // Set the left pointer of the new node to be the target node
    newNode.left = node;
    // Set the right pointer of the new node to be the node the right pointer of the target node used to point to
    newNode.right = node.right;
    // If the right node of the target node isn't null, set that right node's right pointer to be the new node
    if (node.right !== null) node.right.left = newNode;
    // Set the left pointer of the target node 
    node.right = newNode;
    // return `this` to allow for method chaining
    return this;
  }
}
