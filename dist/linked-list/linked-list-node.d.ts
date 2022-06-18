export default class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
    constructor(value: T, next?: LinkedListNode<T>, prev?: LinkedListNode<T>);
}
