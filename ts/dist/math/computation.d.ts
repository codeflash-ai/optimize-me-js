/**
 * Mathematical Computation Functions
 * TypeScript equivalents of Python implementations
 */
/**
 * Greatest Common Divisor using Euclidean algorithm (recursive)
 * @param a - First number
 * @param b - Second number
 * @returns GCD of a and b
 */
export declare function gcdRecursive(a: number, b: number): number;
/**
 * Least Common Multiple
 * @param a - First number
 * @param b - Second number
 * @returns LCM of a and b
 */
export declare function lcm(a: number, b: number): number;
/**
 * Check if a number is prime
 * @param n - Number to check
 * @returns True if prime
 */
export declare function isPrime(n: number): boolean;
/**
 * Sieve of Eratosthenes - Find all primes up to n
 * @param n - Upper limit
 * @returns Array of primes
 */
export declare function sieveOfEratosthenes(n: number): number[];
/**
 * Monte Carlo estimation of Pi
 * @param numSamples - Number of random samples
 * @returns Estimated value of Pi
 */
export declare function monteCarloPi(numSamples: number): number;
/**
 * Newton-Raphson method for square root
 * @param x - Number to find square root of
 * @param epsilon - Tolerance
 * @param maxIter - Maximum iterations
 * @returns Square root approximation
 */
export declare function newtonRaphsonSqrt(x: number, epsilon?: number, maxIter?: number): number;
/**
 * Bisection method for root finding
 * @param f - Function to find root of
 * @param a - Left bound
 * @param b - Right bound
 * @param epsilon - Tolerance
 * @param maxIter - Maximum iterations
 * @returns Root approximation
 */
export declare function bisectionMethod(f: (x: number) => number, a: number, b: number, epsilon?: number, maxIter?: number): number;
/**
 * Lagrange polynomial interpolation
 * @param points - Array of [x, y] points
 * @param x - Point to interpolate at
 * @returns Interpolated value
 */
export declare function lagrangeInterpolation(points: [number, number][], x: number): number;
/**
 * Factorial (recursive)
 * @param n - Number
 * @returns n!
 */
export declare function factorial(n: number): number;
/**
 * Power function (recursive)
 * @param base - Base
 * @param exp - Exponent
 * @returns base^exp
 */
export declare function power(base: number, exp: number): number;
//# sourceMappingURL=computation.d.ts.map