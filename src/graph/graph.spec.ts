import { Errors } from '../errors.enum';
import Graph from './graph';
import Vertex from './vertex';

let graphForNumbers: Graph<number>;
let graphForText: Graph<string>;

beforeEach(() => {
  graphForNumbers = new Graph<number>();
  graphForText = new Graph<string>();
});

test('should be able to add a new vertex', () => {
  const vertex = new Vertex<string>('test');
  graphForText.addVertex(vertex);

  const vertexvalue = graphForText.vertices.get(vertex.id).value;
  expect(vertexvalue).toBe('test');
});

test('should be able to add a new edge', () => {
  const vertex1 = new Vertex<number>(1);
  const vertex2 = new Vertex<number>(2);
  const vertex3 = new Vertex<number>(3);

  graphForNumbers.addVertex(vertex1);
  graphForNumbers.addVertex(vertex2);
  graphForNumbers.addVertex(vertex3);

  graphForNumbers.addEdge(vertex1, vertex2);
  graphForNumbers.addEdge(vertex2, vertex3);
  graphForNumbers.addEdge(vertex3, vertex1);

  const edges1 = graphForNumbers.getEdges(vertex1);
  const edges2 = graphForNumbers.getEdges(vertex2);
  const edges3 = graphForNumbers.getEdges(vertex3);

  const vertex2FoundInEdge = edges1.has(vertex2.id);
  const vertex3FoundInEdge = edges2.has(vertex3.id);
  const vertex1FoundInEdge = edges3.has(vertex1.id);

  expect(vertex2FoundInEdge).toBe(true);
  expect(vertex3FoundInEdge).toBe(true);
  expect(vertex1FoundInEdge).toBe(true);

  expect(() => graphForNumbers.addEdge(vertex1, vertex3)).toThrow(Errors.EDGE_EXITS);
});

test('should be able to remove the vertex', () => {
  const vertex1 = new Vertex<number>(1);
  const vertex2 = new Vertex<number>(2);
  const vertex3 = new Vertex<number>(3);
  graphForNumbers.addVertex(vertex1);
  graphForNumbers.addVertex(vertex2);
  graphForNumbers.addVertex(vertex3);

  graphForNumbers.addEdge(vertex1, vertex2);

  graphForNumbers.removeVertex(vertex2);
  expect(graphForNumbers.vertices.get(vertex2.id)).toBe(undefined);

  expect(vertex1.edges.has(vertex2.id)).toBe(false);
});
test('should be able to remove the references of the vertex from other edges', () => {
  const vertex1 = new Vertex<number>(1);
  const vertex2 = new Vertex<number>(2);
  graphForNumbers.addVertex(vertex1);
  graphForNumbers.addVertex(vertex2);
  graphForNumbers.addEdge(vertex1, vertex2);
  graphForNumbers.removeVertex(vertex2);

  expect(vertex1.edges.has(vertex2.id)).toBe(false);
});

test('should throw an exception when removing non-existent edge', () => {
  const vertex1 = new Vertex<number>(1);
  const vertex2 = new Vertex<number>(2);
  graphForNumbers.addVertex(vertex1);
  graphForNumbers.addVertex(vertex2);
  expect(() => graphForNumbers.removeEdge(vertex1, vertex2)).toThrow(Errors.EDGES_EMPTY);
});

test('should be able to remove an edge', () => {
  const vertex1 = new Vertex<number>(1);
  const vertex2 = new Vertex<number>(2);
  graphForNumbers.addVertex(vertex1);
  graphForNumbers.addVertex(vertex2);

  graphForNumbers.addEdge(vertex1, vertex2);
  graphForNumbers.removeEdge(vertex1, vertex2);

  expect(vertex1.edges.has(vertex2.id)).toBe(false);
  expect(vertex2.edges.has(vertex1.id)).toBe(false);
});
