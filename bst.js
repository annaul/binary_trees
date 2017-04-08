'use strict';

function Node(value) {
  this.value = value || null;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

Node.prototype.addNode = function(value){
  if (value === this.value) return this;
  if (value < this.value) {
    if (this.left) {
      return this.left.addNode(value);
    }
    this.left = new Node(value);
    return this;
  }
  if (value > this.value) {
    if (this.right) {
      return this.right.addNode(value);
    }
    this.right = new Node(value);
    return this;
  }
};

BST.prototype.addNode = function(value) {
  if(!this.root) {
    this.root = new Node(value);
  }
  this.root.addNode(value);
  return this;
};

BST.prototype.findMin = function(node) {
  if (node.left) {
    return this.findMin(node.left);
  }
  return node.value;
};

BST.prototype.findMax = function(node) {
  if (node.right) {
    return this.findMax(node.right);
  }
  return node.value;
};


const tree = new BST;

tree.addNode(20);
tree.addNode(30);
tree.addNode(40);
tree.addNode(100);
tree.addNode(35);
tree.addNode(25);
tree.addNode(24);
tree.addNode(28);
tree.addNode(12);
tree.addNode(19);
tree.addNode(18);
tree.addNode(10);
tree.addNode(5);
tree.addNode(6);
tree.addNode(2);

// console.log(tree);
//
// console.log(tree.findMin(tree.root));
//
// console.log(tree.findMax(tree.root));

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', tree.findNodebyVal(20));
