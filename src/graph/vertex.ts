import { VertexType } from './vertex-type.enum';
import { v4 as uuidv4 } from 'uuid';

export default class Vertex<T> {
  private types: VertexType[];
  id: number;
  value: T;
  edges?: Map<number, Vertex<T>> = new Map();

  constructor(value: T) {
    this.id = uuidv4();
    this.value = value;
    this.types = [VertexType.LABELED];
  }
}
