export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
  prev: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> = null, prev: LinkedListNode<T> = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
