export default class Vertex<T> {
    private types;
    id: number;
    value: T;
    edges?: Map<number, Vertex<T>>;
    constructor(value: T);
}
