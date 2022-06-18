"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = __importDefault(require("./stack"));
var errors_enum_1 = require("../errors.enum");
var stack;
beforeEach(function () {
    stack = new stack_1.default();
});
test('should be able to push an item to stack', function () {
    stack.push('New String');
    expect(stack.size).toBe(1);
    expect(stack.store[stack.size - 1]).toBe('New String');
});
test('should be able to pop an item from stack', function () {
    expect(function () { return stack.pop(); }).toThrow(errors_enum_1.Errors.STACK_EMPTY);
    stack.push('String A');
    stack.push('String B');
    var poppedItem = stack.pop();
    expect(stack.size).toBe(1);
    expect(poppedItem).toBe('String B');
});
test('should be able to peek at the head of the stack', function () {
    expect(function () { return stack.peek(); }).toThrow(errors_enum_1.Errors.STACK_EMPTY);
    stack.push('String A');
    stack.push('String B');
    var poppedItem = stack.peek();
    expect(poppedItem).toBe('String B');
});
