"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VertexType = void 0;
var VertexType;
(function (VertexType) {
    /**
     * When degree of vertex is zero
     */
    VertexType["ISOLATED"] = "Isolated";
    /**
     * When degree of vertex is one
     */
    VertexType["LEAF"] = "Leaf";
    /**
     * When in-degree of vertex is zero
     */
    VertexType["SOURCE"] = "Source";
    /**
     * When out-degree of vertex is zero
     */
    VertexType["SINK"] = "Sink";
    /**
     * The vertex whose neighbors form clique
     */
    VertexType["SIMPLICIAL"] = "Simplical";
    /**
     * Then vertex which is adjacent to every other vertex
     */
    VertexType["UNIVERSAL"] = "Universal";
    /**
     * Then vertex, removal of which would disconnect the remaining graph
     */
    VertexType["CUT"] = "Cut";
    /**
     * When vertex contains information which distinguishes from other vertices
     */
    VertexType["LABELED"] = "Labeled";
    /**
     * When a vertex can be substituted by other unlabeled vertex
     */
    VertexType["UNLABELED"] = "Unlabled";
})(VertexType = exports.VertexType || (exports.VertexType = {}));
