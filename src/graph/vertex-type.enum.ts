export enum VertexType {
  /**
   * When degree of vertex is zero
   */
  ISOLATED = 'Isolated',

  /**
   * When degree of vertex is one
   */
  LEAF = 'Leaf',

  /**
   * When in-degree of vertex is zero
   */
  SOURCE = 'Source',

  /**
   * When out-degree of vertex is zero
   */
  SINK = 'Sink',

  /**
   * The vertex whose neighbors form clique
   */
  SIMPLICIAL = 'Simplical',

  /**
   * Then vertex which is adjacent to every other vertex
   */
  UNIVERSAL = 'Universal',

  /**
   * Then vertex, removal of which would disconnect the remaining graph
   */
  CUT = 'Cut',

  /**
   * When vertex contains information which distinguishes from other vertices
   */
  LABELED = 'Labeled',

  /**
   * When a vertex can be substituted by other unlabeled vertex
   */
  UNLABELED = 'Unlabled',
}
