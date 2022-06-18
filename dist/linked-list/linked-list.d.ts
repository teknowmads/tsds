import LinkedListNode from './linked-list-node';
import { NodePosition } from './node-position';
export default class LinkedList<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;
    length: number;
    constructor();
    /**
     * To add a new node to the list at the tail.
     * @param value
     */
    addNode(value: T): void;
    /**
     * Get the node having a certain value
     * @param value
     * @returns LinkedListNode
     */
    getNode(value: T): LinkedListNode<T>;
    /**
     * Removes a node from the list
     * @param node
     * @returns
     */
    /**
     * To insert a node at a given position in the linked list.
     * @param value Value of the node to be inserted
     * @param node The node before or after which the new node is inserted
     * @param position To indicate the position of the newly added node - BEFORE, AFTER
     */
    insertNode(value: T, node: LinkedListNode<T>, position: NodePosition): LinkedListNode<T>;
}
