"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_enum_1 = require("../errors.enum");
var linked_list_1 = __importDefault(require("./linked-list"));
var node_position_1 = require("./node-position");
var linkedList;
beforeEach(function () {
    linkedList = new linked_list_1.default();
    // linkedList.addNode(1);
    // linkedList.addNode(2);
    // linkedList.addNode(3);
    // linkedList.addNode(4);
    // linkedList.addNode(5);
    // linkedList.addNode(6);
});
test('should be able to add a node', function () {
    linkedList.addNode(1);
    var length = linkedList.length;
    expect(linkedList.head.value).toBe(1);
    linkedList.addNode(7);
    expect(linkedList.tail.value).toBe(7);
    expect(length + 1).toBe(linkedList.length);
});
test('should be able to get a node', function () {
    linkedList.addNode(7);
    expect(linkedList.getNode(7).value).toBe(7);
});
test('should be able to insert a node', function () {
    expect(function () { return linkedList.insertNode(1, null, null); }).toThrow(errors_enum_1.Errors.LINKED_LIST_EMPTY);
    linkedList.addNode(2);
    linkedList.addNode(5);
    var length = 0;
    expect(function () { return linkedList.insertNode(1, linkedList.getNode(2), null); }).toThrow(errors_enum_1.Errors.INVALID_NODE_POSITION);
    length = linkedList.length;
    var insertedNodeAtBeforePostion = linkedList.insertNode(6, linkedList.getNode(2), node_position_1.NodePosition.BEFORE);
    expect(insertedNodeAtBeforePostion.value).toBe(6);
    expect(length + 1).toBe(linkedList.length);
    length = linkedList.length;
    var insertedNodeAtAfterPostion = linkedList.insertNode(12, linkedList.getNode(5), node_position_1.NodePosition.AFTER);
    expect(insertedNodeAtAfterPostion.value).toBe(12);
    expect(length + 1).toBe(linkedList.length);
});
