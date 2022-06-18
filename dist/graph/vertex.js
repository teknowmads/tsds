"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vertex_type_enum_1 = require("./vertex-type.enum");
var uuid_1 = require("uuid");
var Vertex = /** @class */ (function () {
    function Vertex(value) {
        this.edges = new Map();
        this.id = (0, uuid_1.v4)();
        this.value = value;
        this.types = [vertex_type_enum_1.VertexType.LABELED];
    }
    return Vertex;
}());
exports.default = Vertex;
