# optimize-me-js

A dual-language algorithm library providing JavaScript and TypeScript implementations of commonly used algorithms and data structures. Designed for performance benchmarking and optimization analysis with [Codeflash](https://codeflash.ai).

## Project Structure

```
optimize-me-js/
├── js/                          # JavaScript implementation
│   ├── src/
│   │   ├── dsa/                 # Data Structures & Algorithms
│   │   ├── math/                # Mathematical functions
│   │   ├── matrix/              # Matrix and linear algebra operations
│   │   ├── stats/               # Statistical and ML functions
│   │   └── index.js             # Entry point
│   ├── tests/                   # Jest test suites
│   └── package.json
│
└── ts/                          # TypeScript implementation
    ├── src/
    │   ├── dsa/
    │   ├── math/
    │   ├── matrix/
    │   ├── stats/
    │   └── index.ts             # Entry point
    ├── dist/                    # Compiled output
    ├── tests/                   # Jest test suites
    ├── package.json
    └── tsconfig.json
```

## Modules

### DSA (Data Structures & Algorithms)

- **Caching & Memoization**: `timeBasedCache`, `matrixChainOrder`, `binomialCoefficient`, `coinChange`, `knapsack`
- **Graph Operations**: Cycle detection, betweenness centrality, strongly connected components (Kosaraju)
- **Data Structures**: `Graph`, `Stack`, `PathFinder`
- **Algorithms**: `fibonacci`, `graphTraversal`, `isPalindrome`, `wordFrequency`, `regexMatch`

### Math

- **Number Theory**: `gcdRecursive`, `lcm`, `isPrime`, `sieveOfEratosthenes`
- **Numerical Analysis**: `monteCarloPi`, `newtonRaphsonSqrt`, `bisectionMethod`, `lagrangeInterpolation`
- **Basic Functions**: `factorial`, `power`

### Matrix

- **Linear Algebra**: `matrixMultiply`, `matrixAdd`, `matrixInverse`, `matrixDeterminant`, `luDecomposition`, `linearEquationSolver`
- **Vector Operations**: `dotProduct`, `vectorMagnitude`, `vectorNormalize`
- **Signal Processing**: `convolution1d`, `convolution2d`, `fft`, `ifft`, `gaussianBlur`, `imageRotation`, `histogramEqualization`, `rollingMean`

### Stats

- **Descriptive Statistics**: `mean`, `median`, `std`, `variance`, `describe`
- **Correlation**: `pearsonCorrelation`, `correlation` matrix
- **Machine Learning**: `cosineSimilarity`, `cosineSimilarityTopK`, `pca`, `kmeansClustering`, `gradientDescent`, `linearPredict`
- **DataFrame Operations**: Filtering, grouping, merging, `pivotTable`, `melt`, `fillna`, `dropDuplicates`, `sortValues`

## Installation

```bash
# JavaScript
cd js
npm install

# TypeScript
cd ts
npm install
```

## Usage

### JavaScript

```javascript
const { fibonacci, matrixMultiply, mean, Graph } = require('./src');

// Math
console.log(fibonacci(10)); // 55

// Matrix operations
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
console.log(matrixMultiply(A, B));

// Statistics
console.log(mean([1, 2, 3, 4, 5])); // 3
```

### TypeScript

```typescript
import { fibonacci, matrixMultiply, mean, Graph } from './src';

// Same API as JavaScript
console.log(fibonacci(10)); // 55
```

## Testing

```bash
# JavaScript
cd js
npm test

# TypeScript
cd ts
npm test
```

Tests use Jest and cover all four modules.

## Purpose

This project serves as:

1. **Optimization Benchmark Suite** - Includes intentional inefficiencies for Codeflash to identify and suggest optimizations
2. **Algorithm Reference Library** - Working implementations of fundamental algorithms
3. **Performance Testing** - Benchmark and compare implementations across languages
4. **Educational Tool** - Demonstrates classic algorithms from computer science, mathematics, and machine learning

## Codeflash Integration

Both JavaScript and TypeScript packages are pre-configured for Codeflash optimization analysis. See `package.json` in each directory for configuration details.

## License

MIT
