/**
 * Caching and Memoization Algorithms
 * TypeScript equivalents of Python implementations
 */
/**
 * Creates a time-based cache decorator
 * @param expirySeconds - Cache expiry time in seconds
 * @returns Decorator function
 */
export declare function timeBasedCache(expirySeconds: number): <T extends (...args: unknown[]) => unknown>(fn: T) => T;
/**
 * Matrix Chain Order - Dynamic Programming
 * Finds minimum number of scalar multiplications needed for matrix chain multiplication
 * @param matrices - Array of [rows, cols] for each matrix
 * @returns Minimum number of multiplications
 */
export declare function matrixChainOrder(matrices: [number, number][]): number;
/**
 * Binomial Coefficient - Recursive implementation
 * @param n - Total items
 * @param k - Items to choose
 * @returns C(n, k)
 */
export declare function binomialCoefficient(n: number, k: number): number;
/**
 * Coin Change Problem - Recursive implementation
 * @param coins - Available coin denominations
 * @param amount - Target amount
 * @param index - Current coin index
 * @returns Number of ways to make change
 */
export declare function coinChange(coins: number[], amount: number, index?: number): number;
/**
 * 0/1 Knapsack Problem - Recursive implementation
 * @param weights - Item weights
 * @param values - Item values
 * @param capacity - Knapsack capacity
 * @param n - Number of items to consider
 * @returns Maximum value achievable
 */
export declare function knapsack(weights: number[], values: number[], capacity: number, n?: number | null): number;
//# sourceMappingURL=cachingMemoization.d.ts.map