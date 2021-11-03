// graph data
/**
 * 0 -   1  -    2
 * |    /  \      \
 * 3 - 5-   4  -  6
 *
 * {
 *  0: [1, 3],
 *  1: [0, 2, 4, 5],
 *  3: [0, 5],
 *  2: [1, 6,]
 *  5: [1, 3, 4],
 *  4: [1, 5, 6],
 *  6: [2, 4]
 * }
 */

export default class Graph {
    graph = {};

    /**
     * To add node in the graph
     * @param node
     */
    addNode(node) {
        this.graph[node] = [];
    }

    /**
     * To Add edge in the graph
     * @param source
     * @param destination
     * @returns
     */

    addEdge(source, destination) {
        if (!this.graph[source] || !this.graph[destination]) return false;

        if (!this.graph[source].includes(destination))
            this.graph[source].push(destination);

        if (!this.graph[destination].includes(source))
            this.graph[destination].push(source);
    }

    /**
     * To remove a node from graph
     * @param source
     * @returns
     */
    removeNode(source) {
        if (!this.graph[source]) return false;

        this.graph[source].map(item => {
            this.graph[item] = this.graph[item].filter(
                subItem => subItem !== source
            );
        });
        delete this.graph[source];
    }

    /**
     * Remove edge between the nodes in the graph
     * @param source
     * @param destination
     * @returns
     */
    removeEdge(source, destination) {
        if (!this.graph[source] || !this.graph[destination]) return false;

        this.graph[source] = this.graph[source].filter(
            item => item !== destination
        );
        this.graph[destination] = this.graph[destination].filter(
            item => item !== source
        );
    }

    showGraphNodes() {
        console.log('Graph: ', this.graph);
    }
}
