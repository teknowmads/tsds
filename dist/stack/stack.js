"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_enum_1 = require("../errors.enum");
var Stack = /** @class */ (function () {
    function Stack() {
        this.store = [];
    }
    /**
     * To add item to the stack
     * @param item
     */
    Stack.prototype.push = function (item) {
        this.store.push(item);
    };
    /**
     * To get the head element of the stack and remove the head
     * @returns T
     */
    Stack.prototype.pop = function () {
        if (this.isEmpty) {
            throw new Error(errors_enum_1.Errors.STACK_EMPTY);
        }
        var topItem = this.peek();
        this.store.splice(this.size - 1);
        return topItem;
    };
    /**
     * Get head element of the stack
     * @returns T
     */
    Stack.prototype.peek = function () {
        if (this.isEmpty) {
            throw new Error(errors_enum_1.Errors.STACK_EMPTY);
        }
        return this.store[this.size - 1];
    };
    Object.defineProperty(Stack.prototype, "isEmpty", {
        /**
         * Get if the stack is empty or not
         * @returns bool
         */
        get: function () {
            return this.size === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "size", {
        /**
         * Get the size of stack
         * @returns length
         */
        get: function () {
            return this.store.length;
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
exports.default = Stack;
