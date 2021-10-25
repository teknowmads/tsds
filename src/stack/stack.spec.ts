import { Stack } from './stack';

let stack: Stack<string>;
beforeEach(() => {
  stack = new Stack();
});
test('should be able to push an item to stack', () => {
  stack.push('New String');
  expect(stack.length).toBe(1);
  expect(stack.store[stack.length - 1]).toBe('New String');
});

test('should be able to pop an item from stack', () => {
  expect(() => stack.pop()).toThrow('Stack is empty');

  stack.push('String A');
  stack.push('String B');
  let poppedItem = stack.pop();
  expect(stack.size()).toBe(1);
  expect(poppedItem).toBe('String B');
});

test('should be able to peek at the head of the stack', () => {
  expect(() => stack.peek()).toThrow('Stack is empty');
  stack.push('String A');
  stack.push('String B');
  let poppedItem = stack.peek();
  expect(poppedItem).toBe('String B');
});
