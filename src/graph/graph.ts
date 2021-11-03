// graph data
/**
 * Raj -   Madhur  -    Ruchit
 * |        /  \         /
 * John -Amit-Akshit -  Don
 *
 * {
 *  Raj: ['Madhur', 'John'],
 *  Madhur: ['Raj', 'Amit', 'Akshit' ],
 *  John: ['Amit'],
 *  Amit: ['John', 'Madhur', 'Akshit']
 *  Akshit: ['Madhur', 'Amit', 'Don'],
 *  Don: ['Akshit', 'Ruchit'],
 *  Ruchit: ['Don']
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
