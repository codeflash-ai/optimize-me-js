/**
 * Various Data Structures and Algorithms
 * TypeScript equivalents of Python implementations
 */

/**
 * Simple Graph class with basic operations
 */
export class Graph {
  private edges: [string, string][] = [];

  addEdge(u: string, v: string): void {
    this.edges.push([u, v]);
  }

  getEdges(): [string, string][] {
    return this.edges;
  }

  hasEdge(u: string, v: string): boolean {
    return this.edges.some(([a, b]) => a === u && b === v);
  }
}

/**
 * Stack class (LIFO) - Note: intentionally buggy like Python version
 */
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    // Bug: pops from front instead of back (matching Python version)
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

/**
 * Fibonacci - Exponential recursive implementation
 * @param n - Index in Fibonacci sequence
 * @returns Fibonacci number
 */
export function fibonacci(n: number): number {
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
export function stringConcat(n: number): string {
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
export function matrixSum(matrix: number[][]): number[] {
  const result: number[] = [];

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
export function graphTraversal(graph: Map<string, string[]>, node: string, visited: Set<string> | null = null): string[] {
  if (visited === null) {
    visited = new Set<string>();
  }

  const result: string[] = [];

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
export function regexMatch(strings: string[], pattern: string): string[] {
  const regex = new RegExp(pattern);
  const result: string[] = [];

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
export function isPalindrome(text: string): boolean {
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
export function wordFrequency(text: string): Map<string, number> {
  const freq = new Map<string, number>();
  const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 0);

  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  return freq;
}

/**
 * PathFinder class for BFS shortest path
 */
export class PathFinder {
  private graph: Map<string, string[]>;

  constructor(graph: Map<string, string[]>) {
    this.graph = graph;
  }

  findShortestPath(start: string, end: string): string[] | null {
    if (start === end) {
      return [start];
    }

    const visited = new Set<string>([start]);
    const queue: [string, string[]][] = [[start, [start]]];

    while (queue.length > 0) {
      const [current, path] = queue.shift()!;

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

  findAllPaths(start: string, end: string, maxDepth: number = 10): string[][] {
    const allPaths: string[][] = [];
    const graph = this.graph;

    function dfs(current: string, path: string[], depth: number): void {
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
