import Graph from './graph';

let graph;

beforeEach(() => {
    graph = new Graph();
});

test('should be able to add a new node', () => {
    graph.addNode(0);
    graph.addNode(1);

    expect(graph.graph[0].length).toBe(0);
    expect(graph.graph[1].length).toBe(0);
});

test('should be able to add a new edge', () => {
    graph.addNode(0);
    graph.addNode(1);
    graph.addNode(3);

    graph.addEdge(0, 1);
    graph.addEdge(1, 3);

    expect(graph.graph[0].length).toBe(1);
    expect(graph.graph[1].length).toBe(2);
    expect(graph.graph[3].length).toBe(1);
});

test('should be able to delete the node', () => {
    graph.addNode(0);
    graph.addNode(1);
    graph.addNode(3);

    graph.addEdge(0, 1);
    graph.addEdge(1, 3);

    graph.removeNode(0);
    expect(graph.graph[0]).toBe(undefined);
});

test('should be able to delete the edge', () => {
    graph.addNode(0);
    graph.addNode(1);
    graph.addNode(3);

    graph.addEdge(0, 1);
    graph.addEdge(1, 3);

    graph.removeEdge(1, 3);

    expect(graph.graph[1].length).toBe(1);
    expect(graph.graph[3].length).toBe(0);
});
