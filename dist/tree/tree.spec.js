"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = __importDefault(require("./tree"));
var node_1 = __importDefault(require("./node"));
var treeForNumbers;
beforeEach(function () {
    treeForNumbers = new tree_1.default();
});
test('should be able to add a new node', function () {
    var branchNode1 = new node_1.default(2, null);
    var branchNode2 = new node_1.default(3, null);
    var branchNode3 = new node_1.default(4, null);
    var node = new node_1.default(1, [branchNode1, branchNode2, branchNode3]);
    treeForNumbers.addNode(node);
    var addedNode = treeForNumbers.nodes.get(node.id);
    expect(addedNode).toBeTruthy();
});
test('should be able to remove a node', function () {
    var branchNode1 = new node_1.default(2, null);
    var branchNode2 = new node_1.default(3, null);
    var branchNode3 = new node_1.default(4, null);
    var node = new node_1.default(1, [branchNode1, branchNode2, branchNode3]);
    treeForNumbers.addNode(node);
    treeForNumbers.removeNode(node);
    var removedNode = treeForNumbers.nodes.get(node.id);
    expect(removedNode).toBeFalsy();
});
test('should be able to get existing node', function () {
    var branchNode1 = new node_1.default(2, null);
    var branchNode2 = new node_1.default(3, null);
    var branchNode3 = new node_1.default(4, null);
    var node = new node_1.default(1, [branchNode1, branchNode2, branchNode3]);
    treeForNumbers.addNode(node);
    var foundNode = treeForNumbers.getNode(node.id);
    expect(foundNode).toBeTruthy();
});
