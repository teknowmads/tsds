import Graph from './graph';
import Vertex from './vertex';

let graph;

beforeEach(() => {
  graph = new Graph();
});

test('should be able to add a new vertex', () => {
  const vertex = new Vertex<string>('test');
  graph.addVertex(vertex);

  const vertexvalue = graph.vertices.get(vertex.id).value;
  expect(vertexvalue).toBe('test');
});

// test('should be able to add a new edge', () => {
//   graph.addvertex(0);
//   graph.addvertex(1);
//   graph.addvertex(3);

//   graph.addEdge(0, 1);
//   graph.addEdge(1, 3);

//   expect(graph.graph[0].length).toBe(1);
//   expect(graph.graph[1].length).toBe(2);
//   expect(graph.graph[3].length).toBe(1);
// });

test('should be able to delete the vertex', () => {
  const vertex1 = new Vertex<number>(1);
  const vertex2 = new Vertex<number>(2);
  const vertex3 = new Vertex<number>(3);
  graph.addVertex(vertex1);
  graph.addVertex(vertex2);
  graph.addVertex(vertex3);

  graph.removeVertex(vertex2);
  console.log(graph.vertices.get(vertex2.id));
  expect(graph.vertices.get(vertex2.id)).toBe(undefined);
});

// test('should be able to delete the edge', () => {
//   graph.addvertex(0);
//   graph.addvertex(1);
//   graph.addvertex(3);

//   graph.addEdge(0, 1);
//   graph.addEdge(1, 3);

//   graph.removeEdge(1, 3);

//   expect(graph.graph[1].length).toBe(1);
//   expect(graph.graph[3].length).toBe(0);
// });

// test('Breadth-First search traversal', () => {
//   for (let i = 0; i <= 6; i++) {
//     graph.addvertex(i);
//   }

//   graph.addEdge(0, 1);
//   graph.addEdge(0, 3);
//   graph.addEdge(1, 2);
//   graph.addEdge(1, 4);
//   graph.addEdge(1, 5);
//   graph.addEdge(2, 6);
//   graph.addEdge(3, 5);
//   graph.addEdge(4, 5);
//   graph.addEdge(4, 6);

//   graph.bfs(0);
// });

// test('Depth-First search traversal', () => {
//   for (let i = 0; i <= 6; i++) {
//     graph.addvertex(i);
//   }

//   graph.addEdge(0, 1);
//   graph.addEdge(0, 3);
//   graph.addEdge(1, 4);
//   graph.addEdge(1, 5);
//   graph.addEdge(2, 6);
//   graph.addEdge(3, 5);
//   graph.addEdge(4, 5);
//   graph.addEdge(4, 6);

//   graph.dfs(0);
// });
