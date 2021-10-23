import { Errors } from '../errors.enum';
import { LinkedListNode } from './linked-list-node';
import { NodePosition } from './node-position';

export class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * To add a new node to the list at the tail.
   * @param value
   */
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

  /**
   * Get the node having a certain value
   * @param value
   * @returns LinkedListNode
   */
  getNode(value: T): LinkedListNode<T> {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }

  /**
   * Removes a node from the list
   * @param node
   * @returns
   */
  // removeNode(node: LinkedListNode<T>): void {
  //   if (this.length === 0) {
  //     throw new Error(Errors.LINKED_LIST_EMPTY);
  //   }

  //   if (this.head === node) {
  //     this.head === this.head.next;
  //   }
  // }

  /**
   * To insert a node at a given position in the linked list.
   * @param value Value of the node to be inserted
   * @param node The node before or after which the new node is inserted
   * @param position To indicate the position of the newly added node - BEFORE, AFTER
   */
  insertNode(value: T, node: LinkedListNode<T>, position: NodePosition) {
    if (this.length === 0) {
      throw new Error(Errors.LINKED_LIST_EMPTY);
    }
    const nodeToBeInserted = new LinkedListNode(value);

    switch (position) {
      case NodePosition.BEFORE:
        nodeToBeInserted.prev = node.prev;
        nodeToBeInserted.next = node;
        node.prev = nodeToBeInserted;
        this.length++;
        return nodeToBeInserted;

      case NodePosition.AFTER:
        nodeToBeInserted.next = node.next;
        nodeToBeInserted.prev = node;
        node.next = nodeToBeInserted;
        this.length++;
        return nodeToBeInserted;

      default:
        throw new Error(Errors.INVALID_NODE_POSITION);
    }
  }
}
