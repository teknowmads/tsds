"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree = /** @class */ (function () {
    function Tree() {
        this.nodes = new Map();
    }
    /**
     * To add a node in the tree
     * @param node
     */
    Tree.prototype.addNode = function (node) {
        this.nodes.set(node.id, node);
    };
    /**
     * To remove a node from the tree
     * @param node
     */
    Tree.prototype.removeNode = function (node) {
        this.nodes.delete(node.id);
    };
    /**
     * To get a node from the tree
     * @param nodeId
     */
    Tree.prototype.getNode = function (nodeId) {
        return this.nodes.get(nodeId);
    };
    return Tree;
}());
exports.default = Tree;
