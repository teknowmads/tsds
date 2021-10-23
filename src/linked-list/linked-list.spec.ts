import { Errors } from '../errors.enum';
import { LinkedList } from './linked-list';
import { NodePosition } from './node-position';

let linkedList: LinkedList<number>;

beforeEach(() => {
  linkedList = new LinkedList<number>();
  // linkedList.addNode(1);
  // linkedList.addNode(2);
  // linkedList.addNode(3);
  // linkedList.addNode(4);
  // linkedList.addNode(5);
  // linkedList.addNode(6);
});

test('should be able to add a node', () => {
  linkedList.addNode(1);
  let length = linkedList.length;
  expect(linkedList.head.value).toBe(1);

  linkedList.addNode(7);
  expect(linkedList.tail.value).toBe(7);
  expect(length + 1).toBe(linkedList.length);
});

test('should be able to get a node', () => {
  linkedList.addNode(7);
  expect(linkedList.getNode(7).value).toBe(7);
});

test('should be able to insert a node', () => {
  expect(() => linkedList.insertNode(1, null, null)).toThrow(Errors.LINKED_LIST_EMPTY);

  linkedList.addNode(2);
  linkedList.addNode(5);
  let length = 0;

  expect(() => linkedList.insertNode(1, linkedList.getNode(2), null)).toThrow(Errors.INVALID_NODE_POSITION);

  length = linkedList.length;
  const insertedNodeAtBeforePostion = linkedList.insertNode(6, linkedList.getNode(2), NodePosition.BEFORE);
  expect(insertedNodeAtBeforePostion.value).toBe(6);
  expect(length + 1).toBe(linkedList.length);

  length = linkedList.length;
  const insertedNodeAtAfterPostion = linkedList.insertNode(12, linkedList.getNode(5), NodePosition.AFTER);
  expect(insertedNodeAtAfterPostion.value).toBe(12);
  expect(length + 1).toBe(linkedList.length);
});

// test('should be able to remove a node', () => {
//   linkedList.addNode(1);
//   linkedList.addNode(2);
//   linkedList.addNode(3);

//   linkedList.removeNode(linkedList.getNode(2)[0]);
//   console.log(linkedList.getNode(2)[0].value);
//   expect(linkedList.getNode(2)[0].value).toBe(null);
// });
