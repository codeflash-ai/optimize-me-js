/**
 * Graph/Node Operations
 * TypeScript equivalents of Python implementations
 */
/**
 * Find the last (terminal) node in a flow
 * @param nodes - Array of node identifiers
 * @param edges - Array of [source, target] edges
 * @returns Terminal node or null if not found
 */
export declare function findLastNode(nodes: string[], edges: [string, string][]): string | null;
/**
 * Find all leaf nodes (nodes with no outgoing edges)
 * @param nodes - Array of node identifiers
 * @param edges - Array of [source, target] edges
 * @returns Array of leaf nodes
 */
export declare function findLeafNodes(nodes: string[], edges: [string, string][]): string[];
/**
 * Recursively extract $ref definitions from JSON schema
 * @param item - JSON schema item
 * @returns Array of ref strings
 */
export declare function getAllJsonRefs(item: unknown): string[];
/**
 * Find all vertices involved in cycles
 * @param edges - Array of [source, target] edges
 * @returns Set of nodes in cycles
 */
export declare function findCycleVertices(edges: [string, string][]): Set<string>;
/**
 * Sort vertices with chat inputs first
 * @param verticesLayers - Array of vertex layers
 * @returns Sorted layers
 */
export declare function sortChatInputsFirst(verticesLayers: string[][]): string[][];
/**
 * Find node with highest degree (most connections)
 * @param nodes - Array of node identifiers
 * @param connections - Array of [source, target] edges
 * @returns Node with highest degree
 */
export declare function findNodeWithHighestDegree(nodes: string[], connections: [string, string][]): string | null;
/**
 * Find connected components (clusters) using BFS
 * @param nodes - Array of node identifiers
 * @param edges - Array of [source, target] edges
 * @returns Array of clusters (each cluster is array of nodes)
 */
export declare function findNodeClusters(nodes: string[], edges: [string, string][]): string[][];
/**
 * Calculate betweenness centrality for each node
 * @param nodes - Array of node identifiers
 * @param edges - Array of [source, target] edges
 * @returns Map of node to betweenness score
 */
export declare function calculateNodeBetweenness(nodes: string[], edges: [string, string][]): Map<string, number>;
/**
 * Find strongly connected components using Kosaraju's algorithm
 * @param nodes - Array of node identifiers
 * @param edges - Array of [source, target] edges
 * @returns Array of SCCs
 */
export declare function findStronglyConnectedComponents(nodes: string[], edges: [string, string][]): string[][];
//# sourceMappingURL=nodes.d.ts.map