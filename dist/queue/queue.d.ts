export default class Queue<T> {
    store: T[];
    /**
     * To add item to the queue
     * @param item
     */
    enqueue(item: T): void;
    /**
     * To get the head element of the queue and remove the head
     * @returns T
     */
    dequeue(): T;
    /**
     * Get head element of the queue
     * @returns T
     */
    peek(): T;
    /**
     * Get if the queue is empty or not
     * @returns bool
     */
    get isEmpty(): boolean;
    /**
     * Get the size of queue
     * @returns length
     */
    get size(): number;
}
