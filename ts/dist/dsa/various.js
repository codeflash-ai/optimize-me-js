"use strict";
/**
 * Various Data Structures and Algorithms
 * TypeScript equivalents of Python implementations
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathFinder = exports.Stack = exports.Graph = void 0;
exports.fibonacci = fibonacci;
exports.stringConcat = stringConcat;
exports.matrixSum = matrixSum;
exports.graphTraversal = graphTraversal;
exports.regexMatch = regexMatch;
exports.isPalindrome = isPalindrome;
exports.wordFrequency = wordFrequency;
/**
 * Simple Graph class with basic operations
 */
class Graph {
    constructor() {
        this.edges = [];
    }
    addEdge(u, v) {
        this.edges.push([u, v]);
    }
    getEdges() {
        return this.edges;
    }
    hasEdge(u, v) {
        return this.edges.some(([a, b]) => a === u && b === v);
    }
}
exports.Graph = Graph;
/**
 * Stack class (LIFO) - Note: intentionally buggy like Python version
 */
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        // Bug: pops from front instead of back (matching Python version)
        return this.items.shift();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
exports.Stack = Stack;
/**
 * Fibonacci - Exponential recursive implementation
 * @param n - Index in Fibonacci sequence
 * @returns Fibonacci number
 */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
/**
 * String concatenation in loop (inefficient)
 * @param n - Number of iterations
 * @returns Concatenated string
 */
function stringConcat(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result = result + String(i);
    }
    return result;
}
/**
 * Sum rows of matrix with filtering
 * @param matrix - 2D array
 * @returns Row sums (only positive)
 */
function matrixSum(matrix) {
    const result = [];
    for (const row of matrix) {
        let total = 0;
        for (const val of row) {
            total += val;
        }
        if (total > 0) {
            result.push(total);
        }
    }
    return result;
}
/**
 * DFS graph traversal
 * @param graph - Adjacency list
 * @param node - Starting node
 * @param visited - Visited nodes set
 * @returns Visited nodes in order
 */
function graphTraversal(graph, node, visited = null) {
    if (visited === null) {
        visited = new Set();
    }
    const result = [];
    if (!visited.has(node)) {
        visited.add(node);
        result.push(node);
        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
            result.push(...graphTraversal(graph, neighbor, visited));
        }
    }
    return result;
}
/**
 * Pattern matching against string list
 * @param strings - Array of strings to match
 * @param pattern - Regex pattern
 * @returns Matching strings
 */
function regexMatch(strings, pattern) {
    const regex = new RegExp(pattern);
    const result = [];
    for (const str of strings) {
        if (regex.test(str)) {
            result.push(str);
        }
    }
    return result;
}
/**
 * Check if text is a palindrome
 * @param text - Input text
 * @returns True if palindrome
 */
function isPalindrome(text) {
    // Remove non-alphanumeric and convert to lowercase
    const cleaned = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
/**
 * Compute word frequency map
 * @param text - Input text
 * @returns Word frequency map
 */
function wordFrequency(text) {
    const freq = new Map();
    const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 0);
    for (const word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }
    return freq;
}
/**
 * PathFinder class for BFS shortest path
 */
class PathFinder {
    constructor(graph) {
        this.graph = graph;
    }
    findShortestPath(start, end) {
        if (start === end) {
            return [start];
        }
        const visited = new Set([start]);
        const queue = [[start, [start]]];
        while (queue.length > 0) {
            const [current, path] = queue.shift();
            const neighbors = this.graph.get(current) || [];
            for (const neighbor of neighbors) {
                if (neighbor === end) {
                    return [...path, neighbor];
                }
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, [...path, neighbor]]);
                }
            }
        }
        return null; // No path found
    }
    findAllPaths(start, end, maxDepth = 10) {
        const allPaths = [];
        const graph = this.graph;
        function dfs(current, path, depth) {
            if (depth > maxDepth) {
                return;
            }
            if (current === end) {
                allPaths.push([...path]);
                return;
            }
            const neighbors = graph.get(current) || [];
            for (const neighbor of neighbors) {
                if (!path.includes(neighbor)) {
                    path.push(neighbor);
                    dfs(neighbor, path, depth + 1);
                    path.pop();
                }
            }
        }
        dfs(start, [start], 0);
        return allPaths;
    }
}
exports.PathFinder = PathFinder;
//# sourceMappingURL=various.js.map