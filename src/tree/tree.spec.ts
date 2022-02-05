import Tree from './tree';
import Node from './node';

let treeForNumbers: Tree<number>;

beforeEach(() => {
    treeForNumbers = new Tree<number>();
});

test('should be able to add a new node', () => {
    const branchNode1 = new Node<number>(2, null);
    const branchNode2 = new Node<number>(3, null);
    const branchNode3 = new Node<number>(4, null);
    const node = new Node<number>(1, [branchNode1, branchNode2, branchNode3]);
    treeForNumbers.addNode(node);

    const addedNode = treeForNumbers.nodes.get(node.id);
    expect(addedNode).toBeTruthy();
});

test('should be able to remove a node', () => {
    const branchNode1 = new Node<number>(2, null);
    const branchNode2 = new Node<number>(3, null);
    const branchNode3 = new Node<number>(4, null);
    const node = new Node<number>(1, [branchNode1, branchNode2, branchNode3]);
    treeForNumbers.addNode(node);

    treeForNumbers.removeNode(node);
    const removedNode = treeForNumbers.nodes.get(node.id);
    expect(removedNode).toBeFalsy();
});

test('should be able to get existing node', () => {
    const branchNode1 = new Node<number>(2, null);
    const branchNode2 = new Node<number>(3, null);
    const branchNode3 = new Node<number>(4, null);
    const node = new Node<number>(1, [branchNode1, branchNode2, branchNode3]);
    treeForNumbers.addNode(node);

    const foundNode = treeForNumbers.getNode(node.id);
    expect(foundNode).toBeTruthy();
});
