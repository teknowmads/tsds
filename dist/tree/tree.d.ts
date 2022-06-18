import Node from './node';
export default class Tree<T> {
    nodes: Map<any, any>;
    /**
     * To add a node in the tree
     * @param node
     */
    addNode(node: Node<T>): void;
    /**
     * To remove a node from the tree
     * @param node
     */
    removeNode(node: Node<T>): void;
    /**
     * To get a node from the tree
     * @param nodeId
     */
    getNode(nodeId: number): any;
}
