import Vertex from './vertex';
export default class Graph<T> {
    vertices: Map<any, any>;
    /**
     * To add node in the graph
     * @param vertex
     */
    addVertex(vertex: Vertex<T>): void;
    /**
     * To remove a node from graph
     * @param source
     * @returns
     */
    removeVertex(vertex: Vertex<T>): void;
    /**
     * To Add edge in the graph
     * @param source starting of the edge
     * @param destination ending of the edge
     * @returns
     */
    addEdge(source: Vertex<T>, destination: Vertex<T>): void;
    /**
     * To get the associated vertices identifying the edges of a vertex
     * @param vertex vertex for which the edges have been requested.
     * @returns array of vertices
     */
    getEdges(vertex: Vertex<T>): Map<number, Vertex<T>>;
    /**
     * To remove the edge comprised of two vertices
     * @param source starting of the edge
     * @param destination ending of the edge
     */
    removeEdge(source: Vertex<T>, destination: Vertex<T>): void;
}
