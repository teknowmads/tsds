import Graph from './graph';

let graph;

beforeEach(() => {
    graph = new Graph();
});

test('should be able to add a new node', () => {
    graph.addNode('Raj');
    graph.addNode('Madhur');

    expect(graph.graph['Raj'].length).toBe(0);
    expect(graph.graph['Madhur'].length).toBe(0);
});

test('should be able to add a new edge', () => {
    graph.addNode('Raj');
    graph.addNode('Madhur');
    graph.addNode('John');

    graph.addEdge('Raj', 'Madhur', 'John');
    graph.addEdge('Madhur', 'John');

    expect(graph.graph['Raj'].length).toBe(1);
    expect(graph.graph['Madhur'].length).toBe(2);
    expect(graph.graph['John'].length).toBe(1);
});

test('should be able to delete the node', () => {
    graph.addNode('Raj');
    graph.addNode('Madhur');
    graph.addNode('John');

    graph.addEdge('Raj', 'Madhur', 'John');
    graph.addEdge('Madhur', 'John');

    graph.removeNode('Raj');
    expect(graph.graph['Raj']).toBe(undefined);
});

test('should be able to delete the edge', () => {
    graph.addNode('Raj');
    graph.addNode('Madhur');
    graph.addNode('John');

    graph.addEdge('Raj', 'Madhur', 'John');
    graph.addEdge('Madhur', 'John');

    graph.removeEdge('Madhur', 'John');

    expect(graph.graph['Madhur'].length).toBe(1);
    expect(graph.graph['John'].length).toBe(0);
});
