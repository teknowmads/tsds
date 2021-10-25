export class Stack<T> {
  length: number;
  store: T[] = [];

  /**
   * To add item to the stack
   * @param item
   */
  push(item: T) {
    this.store.push(item);
    this.length = this.store.length;
  }

  /**
   * To get the head element of the stack and remove the head
   * @returns
   */
  pop(): T {
    if (this.size() === 0) {
      throw new Error('Stack is empty');
    }
    const topItem = this.peek();
    this.store.splice(this.length - 1);
    return topItem;
  }

  /**
   * Get head element of the stack
   * @returns
   */
  peek(): T {
    if (this.size() === 0) {
      throw new Error('Stack is empty');
    }
    return this.store[this.length - 1];
  }

  /**
   * Get the size of stack
   * @returns
   */
  size() {
    return this.store.length;
  }
}
