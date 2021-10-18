import { LinkedListNode } from './linked-list-node';

export class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(value: T): void {
    const node = new LinkedListNode(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  removeNode(node: LinkedListNode<T>): void {
    if (this.length === 0) {
      return;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    this.length--;
  }

  getNode(value: T): LinkedListNode<T>[] {
    let current = this.head;
    let tempObj = [];

    while (current) {
      if (current.value === value) {
        //return current;
        tempObj = [...tempObj, current];
      }
      current = current.next;
    }

    return tempObj;
  }
}
