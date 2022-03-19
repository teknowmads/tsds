import { Errors } from '../errors.enum';
import Queue from './queue';

let queue: Queue<string>;
beforeEach(() => {
    queue = new Queue();
});

test('should be able to enqueue new item', () => {
    queue.enqueue('New String');
    expect(queue.size).toBe(1);
    expect(queue.store[0]).toBe('New String');
});

test('should be able to dequeue item', () => {
    expect(() => queue.dequeue()).toThrow(Errors.QUEUE_EMPTY);

    queue.enqueue('New String');
    let peekValue = queue.store[0];
    expect(queue.dequeue()).toBe(peekValue);
});

test('should be able to peek head item', () => {
    expect(() => queue.peek()).toThrow(Errors.QUEUE_EMPTY);

    queue.enqueue('New String');
    expect(queue.peek()).toBe('New String');
});
