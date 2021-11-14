import Graph from './graph';
import Vertex from './vertex';

let graph;

beforeEach(() => {
    graph = new Graph();
});

test('should be able to add a new node', () => {
    // const vertex = new Vertex<string>()

    const vertex: Vertex<string> = new Vertex<string>({
        value: '',
    });

    graph.addVertex({
        value: { sampleId: '', sampleValue: 0 },
        edges: [],
        types: [],
    });
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

test('Breadth-First search traversal', () => {
    for (let i = 0; i <= 6; i++) {
        graph.addNode(i);
    }

    graph.addEdge(0, 1);
    graph.addEdge(0, 3);
    graph.addEdge(1, 2);
    graph.addEdge(1, 4);
    graph.addEdge(1, 5);
    graph.addEdge(2, 6);
    graph.addEdge(3, 5);
    graph.addEdge(4, 5);
    graph.addEdge(4, 6);

    graph.bfs(0);
});

test('Depth-First search traversal', () => {
    for (let i = 0; i <= 6; i++) {
        graph.addNode(i);
    }

    graph.addEdge(0, 1);
    graph.addEdge(0, 3);
    graph.addEdge(1, 4);
    graph.addEdge(1, 5);
    graph.addEdge(2, 6);
    graph.addEdge(3, 5);
    graph.addEdge(4, 5);
    graph.addEdge(4, 6);

    graph.dfs(0);
});
