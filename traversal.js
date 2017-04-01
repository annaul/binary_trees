'use strict';

function Node(val) {
  this.val = val;
  this.children = [];
}

function Tree(val) {
  this.root = new Node(val);
}

const tree = new Tree('a');

tree.root.children[0] = new Node('b');
tree.root.children[1] = new Node('c');
tree.root.children[0].children[0] = new Node('d');
tree.root.children[0].children[1] = new Node('e');
tree.root.children[1].children[0] = new Node('f');
tree.root.children[1].children[1] = new Node('g');
tree.root.children[0].children[0].children[0] = new Node('h');
tree.root.children[0].children[0].children[1] = new Node('i');

Tree.prototype.DLR = function(node) {
  console.log(node.val);

  if (node.children[0]) {
    this.DLR(node.children[0]);
  }
  if (node.children[1]) {
    this.DLR(node.children[1]);
  }
};

tree.DLR(tree.root);
console.log('===============================================');

Tree.prototype.LRD = function(node) {

  if(node.children[0]) {
    this.LRD(node.children[0]);
  }
  if(node.children[1]) {
    this.LRD(node.children[1]);
  }
  console.log(node.val);
};

tree.LRD(tree.root);
console.log('===============================================');

Tree.prototype.LDR = function(node) {

  if(node.children[0]) {
    this.LDR(node.children[0]);
  }
  console.log(node.val);
  if(node.children[1]) {
    this.LDR(node.children[1]);
  }
};

tree.LDR(tree.root);
