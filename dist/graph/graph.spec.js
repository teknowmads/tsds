"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_enum_1 = require("../errors.enum");
var graph_1 = __importDefault(require("./graph"));
var vertex_1 = __importDefault(require("./vertex"));
var graphForNumbers;
var graphForText;
beforeEach(function () {
    graphForNumbers = new graph_1.default();
    graphForText = new graph_1.default();
});
test('should be able to add a new vertex', function () {
    var vertex = new vertex_1.default('test');
    graphForText.addVertex(vertex);
    var addedVertex = graphForText.vertices.get(vertex.id);
    expect(addedVertex).toBeTruthy();
});
test('should be able to add a new edge', function () {
    var vertex1 = new vertex_1.default(1);
    var vertex2 = new vertex_1.default(2);
    var vertex3 = new vertex_1.default(3);
    graphForNumbers.addVertex(vertex1);
    graphForNumbers.addVertex(vertex2);
    graphForNumbers.addVertex(vertex3);
    graphForNumbers.addEdge(vertex1, vertex2);
    graphForNumbers.addEdge(vertex2, vertex3);
    graphForNumbers.addEdge(vertex3, vertex1);
    var edges1 = graphForNumbers.getEdges(vertex1);
    var edges2 = graphForNumbers.getEdges(vertex2);
    var edges3 = graphForNumbers.getEdges(vertex3);
    var vertex2FoundInEdge = edges1.has(vertex2.id);
    var vertex3FoundInEdge = edges2.has(vertex3.id);
    var vertex1FoundInEdge = edges3.has(vertex1.id);
    expect(vertex2FoundInEdge).toBeTruthy();
    expect(vertex3FoundInEdge).toBeTruthy();
    expect(vertex1FoundInEdge).toBeTruthy();
    expect(function () { return graphForNumbers.addEdge(vertex1, vertex3); }).toThrow(errors_enum_1.Errors.EDGE_EXITS);
});
test('should be able to remove the vertex', function () {
    var vertex1 = new vertex_1.default(1);
    var vertex2 = new vertex_1.default(2);
    var vertex3 = new vertex_1.default(3);
    graphForNumbers.addVertex(vertex1);
    graphForNumbers.addVertex(vertex2);
    graphForNumbers.addVertex(vertex3);
    graphForNumbers.addEdge(vertex1, vertex2);
    graphForNumbers.removeVertex(vertex2);
    expect(graphForNumbers.vertices.get(vertex2.id)).toBeFalsy();
    expect(vertex1.edges.has(vertex2.id)).toBeFalsy();
});
test('should be able to remove the references of the vertex from other edges', function () {
    var vertex1 = new vertex_1.default(1);
    var vertex2 = new vertex_1.default(2);
    graphForNumbers.addVertex(vertex1);
    graphForNumbers.addVertex(vertex2);
    graphForNumbers.addEdge(vertex1, vertex2);
    graphForNumbers.removeVertex(vertex2);
    expect(vertex1.edges.has(vertex2.id)).toBeFalsy();
});
test('should throw an exception when removing non-existent edge', function () {
    var vertex1 = new vertex_1.default(1);
    var vertex2 = new vertex_1.default(2);
    graphForNumbers.addVertex(vertex1);
    graphForNumbers.addVertex(vertex2);
    expect(function () { return graphForNumbers.removeEdge(vertex1, vertex2); }).toThrow(errors_enum_1.Errors.EDGES_EMPTY);
});
test('should be able to remove an edge', function () {
    var vertex1 = new vertex_1.default(1);
    var vertex2 = new vertex_1.default(2);
    graphForNumbers.addVertex(vertex1);
    graphForNumbers.addVertex(vertex2);
    graphForNumbers.addEdge(vertex1, vertex2);
    graphForNumbers.removeEdge(vertex1, vertex2);
    expect(vertex1.edges.has(vertex2.id)).toBeFalsy();
    expect(vertex2.edges.has(vertex1.id)).toBeFalsy();
});
