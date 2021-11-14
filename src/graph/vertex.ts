import { VertexType } from './vertex-type.enum';

export default class Vertex<T> {
    private types: VertexType[];
    value: T;
    edges?: Vertex<T>[];

    constructor(value: T) {
        this.value = value;
    }
}
