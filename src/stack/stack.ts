import { Errors } from '../errors.enum';
export default class Stack<T> {
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
     * @returns T
     */
    pop(): T {
        if (this.size() === 0) {
            throw new Error(Errors.STACK_EMPTY);
        }
        const topItem = this.peek();
        this.store.splice(this.length - 1);
        return topItem;
    }

    /**
     * Get head element of the stack
     * @returns T
     */
    peek(): T {
        if (this.size() === 0) {
            throw new Error(Errors.STACK_EMPTY);
        }
        return this.store[this.length - 1];
    }

    /**
     * Get the size of stack
     * @returns length
     */
    size() {
        return this.store.length;
    }
}
