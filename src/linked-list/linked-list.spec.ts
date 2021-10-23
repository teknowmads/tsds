import { LinkedList } from './linked-list';

const linkedList = new LinkedList<number>();

test('should be able to add a node', () => {
  linkedList.addNode(1);
  expect(linkedList.head.value).toBe(1);
});

test('should be able to get a node', () => {
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);

  expect(linkedList.getNode(2)[0].value).toBe(2);
});

// test('should be able to remove a node', () => {
//   linkedList.addNode(1);
//   linkedList.addNode(2);
//   linkedList.addNode(3);

//   linkedList.removeNode(linkedList.getNode(2)[0]);
//   console.log(linkedList.getNode(2)[0].value);
//   expect(linkedList.getNode(2)[0].value).toBe(null);
// });
