"use strict";
/**
 * Mathematical Computation Functions
 * TypeScript equivalents of Python implementations
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcdRecursive = gcdRecursive;
exports.lcm = lcm;
exports.isPrime = isPrime;
exports.sieveOfEratosthenes = sieveOfEratosthenes;
exports.monteCarloPi = monteCarloPi;
exports.newtonRaphsonSqrt = newtonRaphsonSqrt;
exports.bisectionMethod = bisectionMethod;
exports.lagrangeInterpolation = lagrangeInterpolation;
exports.factorial = factorial;
exports.power = power;
/**
 * Greatest Common Divisor using Euclidean algorithm (recursive)
 * @param a - First number
 * @param b - Second number
 * @returns GCD of a and b
 */
function gcdRecursive(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b === 0) {
        return a;
    }
    return gcdRecursive(b, a % b);
}
/**
 * Least Common Multiple
 * @param a - First number
 * @param b - Second number
 * @returns LCM of a and b
 */
function lcm(a, b) {
    return Math.abs(a * b) / gcdRecursive(a, b);
}
/**
 * Check if a number is prime
 * @param n - Number to check
 * @returns True if prime
 */
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
/**
 * Sieve of Eratosthenes - Find all primes up to n
 * @param n - Upper limit
 * @returns Array of primes
 */
function sieveOfEratosthenes(n) {
    if (n < 2) {
        return [];
    }
    const sieve = new Array(n + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    return primes;
}
/**
 * Monte Carlo estimation of Pi
 * @param numSamples - Number of random samples
 * @returns Estimated value of Pi
 */
function monteCarloPi(numSamples) {
    let insideCircle = 0;
    for (let i = 0; i < numSamples; i++) {
        const x = Math.random();
        const y = Math.random();
        if (x * x + y * y <= 1) {
            insideCircle++;
        }
    }
    return 4 * insideCircle / numSamples;
}
/**
 * Newton-Raphson method for square root
 * @param x - Number to find square root of
 * @param epsilon - Tolerance
 * @param maxIter - Maximum iterations
 * @returns Square root approximation
 */
function newtonRaphsonSqrt(x, epsilon = 1e-10, maxIter = 100) {
    if (x < 0) {
        throw new Error('Cannot compute square root of negative number');
    }
    if (x === 0) {
        return 0;
    }
    let guess = x / 2;
    for (let i = 0; i < maxIter; i++) {
        const nextGuess = (guess + x / guess) / 2;
        if (Math.abs(nextGuess - guess) < epsilon) {
            return nextGuess;
        }
        guess = nextGuess;
    }
    return guess;
}
/**
 * Bisection method for root finding
 * @param f - Function to find root of
 * @param a - Left bound
 * @param b - Right bound
 * @param epsilon - Tolerance
 * @param maxIter - Maximum iterations
 * @returns Root approximation
 */
function bisectionMethod(f, a, b, epsilon = 1e-10, maxIter = 100) {
    if (f(a) * f(b) > 0) {
        throw new Error('f(a) and f(b) must have opposite signs');
    }
    for (let i = 0; i < maxIter; i++) {
        const mid = (a + b) / 2;
        const fMid = f(mid);
        if (Math.abs(fMid) < epsilon || (b - a) / 2 < epsilon) {
            return mid;
        }
        if (f(a) * fMid < 0) {
            b = mid;
        }
        else {
            a = mid;
        }
    }
    return (a + b) / 2;
}
/**
 * Lagrange polynomial interpolation
 * @param points - Array of [x, y] points
 * @param x - Point to interpolate at
 * @returns Interpolated value
 */
function lagrangeInterpolation(points, x) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        let term = points[i][1];
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                term *= (x - points[j][0]) / (points[i][0] - points[j][0]);
            }
        }
        result += term;
    }
    return result;
}
/**
 * Factorial (recursive)
 * @param n - Number
 * @returns n!
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial not defined for negative numbers');
    }
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
/**
 * Power function (recursive)
 * @param base - Base
 * @param exp - Exponent
 * @returns base^exp
 */
function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp < 0) {
        return 1 / power(base, -exp);
    }
    if (exp % 2 === 0) {
        const half = power(base, exp / 2);
        return half * half;
    }
    return base * power(base, exp - 1);
}
//# sourceMappingURL=computation.js.map