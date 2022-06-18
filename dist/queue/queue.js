"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_enum_1 = require("../errors.enum");
var Queue = /** @class */ (function () {
    function Queue() {
        this.store = [];
    }
    /**
     * To add item to the queue
     * @param item
     */
    Queue.prototype.enqueue = function (item) {
        this.store.push(item);
    };
    /**
     * To get the head element of the queue and remove the head
     * @returns T
     */
    Queue.prototype.dequeue = function () {
        if (this.isEmpty) {
            throw new Error(errors_enum_1.Errors.QUEUE_EMPTY);
        }
        return this.store.shift();
    };
    /**
     * Get head element of the queue
     * @returns T
     */
    Queue.prototype.peek = function () {
        if (this.isEmpty) {
            throw new Error(errors_enum_1.Errors.QUEUE_EMPTY);
        }
        return this.store[0];
    };
    Object.defineProperty(Queue.prototype, "isEmpty", {
        /**
         * Get if the queue is empty or not
         * @returns bool
         */
        get: function () {
            return this.size === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "size", {
        /**
         * Get the size of queue
         * @returns length
         */
        get: function () {
            return this.store.length;
        },
        enumerable: false,
        configurable: true
    });
    return Queue;
}());
exports.default = Queue;
