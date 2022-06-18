export default class Node<T> {
    id: number;
    value: T;
    branchNodes: Node<T>[];
    constructor(value: T, branchNodes: Node<T>[]);
}
