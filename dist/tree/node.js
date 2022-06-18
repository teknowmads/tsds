"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Node = /** @class */ (function () {
    //right: Node<T>[];
    function Node(value, branchNodes) {
        this.id = (0, uuid_1.v4)();
        this.value = value;
        this.branchNodes = branchNodes;
    }
    return Node;
}());
exports.default = Node;
