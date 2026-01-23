# optimize-me-ts

TypeScript equivalents of Python algorithms for optimization benchmarking and testing.

## Overview

This library provides implementations of common algorithms and data structures in TypeScript, designed as equivalents to Python implementations. It includes modules for mathematical computation, data structures, matrix operations, and statistical analysis.

## Installation

```bash
npm install
```

## Usage

```typescript
import { gcdRecursive, matrixMultiply, mean, fibonacci } from 'optimize-me-ts';

// Math operations
const gcd = gcdRecursive(48, 18); // 6

// Matrix operations
const result = matrixMultiply([[1, 2], [3, 4]], [[5, 6], [7, 8]]);

// Statistics
const average = mean([1, 2, 3, 4, 5]); // 3

// DSA
const fib = fibonacci(10); // 55
```

## Modules

### Math (`src/math`)

Mathematical computation functions:

- `gcdRecursive` - Greatest Common Divisor (Euclidean algorithm)
- `lcm` - Least Common Multiple
- `isPrime` - Primality test
- `sieveOfEratosthenes` - Generate primes up to n
- `monteCarloPi` - Pi estimation via Monte Carlo method
- `newtonRaphsonSqrt` - Square root via Newton-Raphson
- `bisectionMethod` - Root finding via bisection
- `lagrangeInterpolation` - Polynomial interpolation
- `factorial` - Factorial computation
- `power` - Exponentiation

### Data Structures & Algorithms (`src/dsa`)

Core data structures and algorithms:

- `Graph` - Simple graph with edge operations
- `Stack` - LIFO stack implementation
- `PathFinder` - BFS shortest path and all-paths finder
- `fibonacci` - Fibonacci sequence (recursive)
- `stringConcat` - String concatenation benchmark
- `matrixSum` - Matrix row summation with filtering
- `graphTraversal` - DFS graph traversal
- `regexMatch` - Pattern matching on string arrays
- `isPalindrome` - Palindrome checker
- `wordFrequency` - Word frequency counter

**Caching & Memoization:**

- `timeBasedCache` - Time-based cache decorator
- `matrixChainOrder` - Matrix chain multiplication optimization
- `binomialCoefficient` - Binomial coefficient (recursive)
- `coinChange` - Coin change problem
- `knapsack` - 0/1 Knapsack problem

### Matrix Operations (`src/matrix`)

Linear algebra operations:

- `matrixMultiply` - Matrix multiplication
- `dotProduct` - Vector dot product
- `matrixInverse` - Matrix inversion (Gauss-Jordan)
- `matrixDeterminant` - Determinant (cofactor expansion)
- `luDecomposition` - LU decomposition
- `matrixTranspose` - Matrix transpose
- `linearEquationSolver` - Solve Ax = b
- `identityMatrix` - Generate identity matrix
- `matrixAdd` - Matrix addition
- `matrixScalarMultiply` - Scalar multiplication
- `vectorMagnitude` - Euclidean norm
- `vectorNormalize` - Unit vector normalization

**Signal Processing:**

- Additional signal processing utilities

### Statistics (`src/stats`)

Statistical and machine learning functions:

- `mean`, `std`, `variance`, `median` - Basic statistics
- `describe` - Descriptive statistics summary
- `cosineSimilarity` - Cosine similarity (vectors and matrices)
- `cosineSimilarityTopK` - Top-k similarity filtering
- `pearsonCorrelation` - Pearson correlation coefficient
- `correlation` - Correlation matrix
- `pca` - Principal Component Analysis
- `kmeansClustering` - K-Means clustering
- `gradientDescent` - Linear regression via gradient descent
- `linearPredict` - Linear model prediction

**DataFrame:**

- DataFrame-like utilities for tabular data

## Scripts

```bash
# Build TypeScript to JavaScript
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Project Structure

```
ts/
├── src/
│   ├── index.ts           # Main entry point
│   ├── dsa/               # Data structures & algorithms
│   │   ├── cachingMemoization.ts
│   │   ├── nodes.ts
│   │   └── various.ts
│   ├── math/              # Mathematical functions
│   │   └── computation.ts
│   ├── matrix/            # Matrix operations
│   │   ├── matrixOperations.ts
│   │   └── signalProcessing.ts
│   └── stats/             # Statistical functions
│       ├── dataframe.ts
│       └── statistical.ts
├── tests/                 # Jest test suites
│   ├── dsa.test.ts
│   ├── math.test.ts
│   ├── matrix.test.ts
│   └── stats.test.ts
├── dist/                  # Compiled output
├── package.json
└── tsconfig.json
```

## Configuration

### TypeScript

- Target: ES2020
- Module: CommonJS
- Strict mode enabled
- Declaration files generated

### Codeflash

This project is configured for Codeflash optimization analysis:

```json
{
  "moduleRoot": "src",
  "testsRoot": "tests",
  "language": "typescript"
}
```

## License

See parent project for license information.
