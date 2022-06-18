"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_enum_1 = require("../errors.enum");
var queue_1 = __importDefault(require("./queue"));
var queue;
beforeEach(function () {
    queue = new queue_1.default();
});
test('should be able to enqueue new item', function () {
    queue.enqueue('New String');
    expect(queue.size).toBe(1);
    expect(queue.store[0]).toBe('New String');
});
test('should be able to dequeue item', function () {
    expect(function () { return queue.dequeue(); }).toThrow(errors_enum_1.Errors.QUEUE_EMPTY);
    queue.enqueue('New String');
    var peekValue = queue.store[0];
    expect(queue.dequeue()).toBe(peekValue);
});
test('should be able to peek head item', function () {
    expect(function () { return queue.peek(); }).toThrow(errors_enum_1.Errors.QUEUE_EMPTY);
    queue.enqueue('New String');
    expect(queue.peek()).toBe('New String');
});
