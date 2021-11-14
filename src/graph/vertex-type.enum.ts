export enum VertexType {
    ISOLATED = 'degree zero',
    LEAF = 'degree one',
    SOURCE = 'indegree zero',
    SINK = 'outdegree zero',
    SIMPLICIAL = 'neighbors forming clique',
    UNIVERSAL = 'adjacent to every other vertex',
    CUT = 'removal of which would disconnect the remaining graph',
    LABELED = 'containing distinguishing information',
    UNLABELED = 'can be substituted by other unlabeled vertex',
}
