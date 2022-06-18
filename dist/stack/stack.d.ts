export default class Stack<T> {
    store: T[];
    /**
     * To add item to the stack
     * @param item
     */
    push(item: T): void;
    /**
     * To get the head element of the stack and remove the head
     * @returns T
     */
    pop(): T;
    /**
     * Get head element of the stack
     * @returns T
     */
    peek(): T;
    /**
     * Get if the stack is empty or not
     * @returns bool
     */
    get isEmpty(): boolean;
    /**
     * Get the size of stack
     * @returns length
     */
    get size(): number;
}
