"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_enum_1 = require("../errors.enum");
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = new Map();
    }
    /**
     * To add node in the graph
     * @param vertex
     */
    Graph.prototype.addVertex = function (vertex) {
        this.vertices.set(vertex.id, vertex);
    };
    /**
     * To remove a node from graph
     * @param source
     * @returns
     */
    Graph.prototype.removeVertex = function (vertex) {
        // Remove the reference of vertex from all the edges where it was a participant
        for (var _i = 0, _a = Array.from(vertex.edges); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            value.edges.delete(vertex.id);
        }
        this.vertices.delete(vertex.id);
    };
    /**
     * To Add edge in the graph
     * @param source starting of the edge
     * @param destination ending of the edge
     * @returns
     */
    Graph.prototype.addEdge = function (source, destination) {
        if (source.edges.has(destination.id) && destination.edges.has(source.id)) {
            throw new Error(errors_enum_1.Errors.EDGE_EXITS);
        }
        source.edges.set(destination.id, destination);
        destination.edges.set(source.id, source);
    };
    /**
     * To get the associated vertices identifying the edges of a vertex
     * @param vertex vertex for which the edges have been requested.
     * @returns array of vertices
     */
    Graph.prototype.getEdges = function (vertex) {
        return vertex.edges;
    };
    /**
     * To remove the edge comprised of two vertices
     * @param source starting of the edge
     * @param destination ending of the edge
     */
    Graph.prototype.removeEdge = function (source, destination) {
        if (source.edges.size === 0 || destination.edges.size === 0) {
            throw new Error(errors_enum_1.Errors.EDGES_EMPTY);
        }
        source.edges.delete(destination.id);
        destination.edges.delete(source.id);
    };
    return Graph;
}());
exports.default = Graph;
