/**
 * Various Data Structures and Algorithms
 * TypeScript equivalents of Python implementations
 */
/**
 * Simple Graph class with basic operations
 */
export declare class Graph {
    private edges;
    addEdge(u: string, v: string): void;
    getEdges(): [string, string][];
    hasEdge(u: string, v: string): boolean;
}
/**
 * Stack class (LIFO) - Note: intentionally buggy like Python version
 */
export declare class Stack<T> {
    private items;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
/**
 * Fibonacci - Exponential recursive implementation
 * @param n - Index in Fibonacci sequence
 * @returns Fibonacci number
 */
export declare function fibonacci(n: number): number;
/**
 * String concatenation in loop (inefficient)
 * @param n - Number of iterations
 * @returns Concatenated string
 */
export declare function stringConcat(n: number): string;
/**
 * Sum rows of matrix with filtering
 * @param matrix - 2D array
 * @returns Row sums (only positive)
 */
export declare function matrixSum(matrix: number[][]): number[];
/**
 * DFS graph traversal
 * @param graph - Adjacency list
 * @param node - Starting node
 * @param visited - Visited nodes set
 * @returns Visited nodes in order
 */
export declare function graphTraversal(graph: Map<string, string[]>, node: string, visited?: Set<string> | null): string[];
/**
 * Pattern matching against string list
 * @param strings - Array of strings to match
 * @param pattern - Regex pattern
 * @returns Matching strings
 */
export declare function regexMatch(strings: string[], pattern: string): string[];
/**
 * Check if text is a palindrome
 * @param text - Input text
 * @returns True if palindrome
 */
export declare function isPalindrome(text: string): boolean;
/**
 * Compute word frequency map
 * @param text - Input text
 * @returns Word frequency map
 */
export declare function wordFrequency(text: string): Map<string, number>;
/**
 * PathFinder class for BFS shortest path
 */
export declare class PathFinder {
    private graph;
    constructor(graph: Map<string, string[]>);
    findShortestPath(start: string, end: string): string[] | null;
    findAllPaths(start: string, end: string, maxDepth?: number): string[][];
}
//# sourceMappingURL=various.d.ts.map