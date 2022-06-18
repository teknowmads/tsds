"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_enum_1 = require("../errors.enum");
var linked_list_node_1 = __importDefault(require("./linked-list-node"));
var node_position_1 = require("./node-position");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * To add a new node to the list at the tail.
     * @param value
     */
    LinkedList.prototype.addNode = function (value) {
        var node = new linked_list_node_1.default(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    };
    /**
     * Get the node having a certain value
     * @param value
     * @returns LinkedListNode
     */
    LinkedList.prototype.getNode = function (value) {
        var current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
    };
    /**
     * Removes a node from the list
     * @param node
     * @returns
     */
    // removeNode(node: LinkedListNode<T>): void {
    //   if (this.length === 0) {
    //     throw new Error(Errors.LINKED_LIST_EMPTY);
    //   }
    //   if (this.head === node) {
    //     this.head === this.head.next;
    //   }
    // }
    /**
     * To insert a node at a given position in the linked list.
     * @param value Value of the node to be inserted
     * @param node The node before or after which the new node is inserted
     * @param position To indicate the position of the newly added node - BEFORE, AFTER
     */
    LinkedList.prototype.insertNode = function (value, node, position) {
        if (this.length === 0) {
            throw new Error(errors_enum_1.Errors.LINKED_LIST_EMPTY);
        }
        var nodeToBeInserted = new linked_list_node_1.default(value);
        switch (position) {
            case node_position_1.NodePosition.BEFORE:
                nodeToBeInserted.prev = node.prev;
                nodeToBeInserted.next = node;
                node.prev = nodeToBeInserted;
                this.length++;
                return nodeToBeInserted;
            case node_position_1.NodePosition.AFTER:
                nodeToBeInserted.next = node.next;
                nodeToBeInserted.prev = node;
                node.next = nodeToBeInserted;
                this.length++;
                return nodeToBeInserted;
            default:
                throw new Error(errors_enum_1.Errors.INVALID_NODE_POSITION);
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;
