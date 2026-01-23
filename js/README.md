# optimize-me-js

JavaScript equivalents of Python algorithms for optimization testing. This library provides implementations of common algorithms and data structures designed for performance analysis and optimization.

## Installation

```bash
npm install
```

## Usage

```javascript
import { fibonacci, matrixMultiply, kmeansClustering } from 'optimize-me-js';

// DSA
const fib = fibonacci(10); // 55

// Matrix operations
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
const result = matrixMultiply(A, B);

// Machine learning
const data = [[1, 2], [1.5, 1.8], [5, 8], [8, 8]];
const { centroids, labels } = kmeansClustering(data, 2);
```

## Modules

### DSA (Data Structures & Algorithms)

**Caching & Memoization**
- `timeBasedCache` - Time-based cache decorator
- `matrixChainOrder` - Matrix chain multiplication (dynamic programming)
- `binomialCoefficient` - Recursive binomial coefficient
- `coinChange` - Coin change problem
- `knapsack` - 0/1 Knapsack problem

**Graph/Node Operations**
- `findLastNode` - Find terminal node in a flow
- `findLeafNodes` - Find nodes with no outgoing edges
- `getAllJsonRefs` - Extract $ref definitions from JSON schema
- `findCycleVertices` - Find vertices involved in cycles
- `findNodeWithHighestDegree` - Find most connected node
- `findNodeClusters` - Find connected components (BFS)
- `calculateNodeBetweenness` - Betweenness centrality
- `findStronglyConnectedComponents` - Kosaraju's algorithm

**Data Structures**
- `Graph` - Simple graph class
- `Stack` - Stack (LIFO) implementation
- `PathFinder` - BFS shortest path finder

**Utilities**
- `fibonacci` - Recursive Fibonacci
- `stringConcat` - String concatenation
- `matrixSum` - Sum matrix rows
- `graphTraversal` - DFS traversal
- `regexMatch` - Pattern matching
- `isPalindrome` - Palindrome checker
- `wordFrequency` - Word frequency map

### Math

- `gcdRecursive` - Greatest Common Divisor (Euclidean)
- `lcm` - Least Common Multiple
- `isPrime` - Primality test
- `sieveOfEratosthenes` - Find all primes up to n
- `monteCarloPi` - Monte Carlo Pi estimation
- `newtonRaphsonSqrt` - Newton-Raphson square root
- `bisectionMethod` - Root finding
- `lagrangeInterpolation` - Polynomial interpolation
- `factorial` - Recursive factorial
- `power` - Recursive power function

### Matrix

**Linear Algebra**
- `matrixMultiply` - Matrix multiplication
- `dotProduct` - Vector dot product
- `matrixInverse` - Gauss-Jordan elimination
- `matrixDeterminant` - Cofactor expansion
- `luDecomposition` - LU decomposition
- `matrixTranspose` - Matrix transpose
- `linearEquationSolver` - Gaussian elimination
- `identityMatrix` - Create identity matrix
- `matrixAdd` - Matrix addition
- `matrixScalarMultiply` - Scalar multiplication
- `vectorMagnitude` - Euclidean norm
- `vectorNormalize` - Unit vector

**Signal Processing**
- `convolution1d` - 1D convolution
- `fft` - Fast Fourier Transform (Cooley-Tukey)
- `ifft` - Inverse FFT
- `createGaussianKernel` - Gaussian kernel for blur
- `convolution2d` - 2D convolution
- `gaussianBlur` - Gaussian blur
- `imageRotation` - Image rotation
- `histogramEqualization` - Histogram equalization
- `rollingMean` - Moving average

### Stats

**Statistical Functions**
- `mean` - Arithmetic mean
- `std` - Standard deviation
- `variance` - Variance
- `median` - Median
- `describe` - Descriptive statistics
- `pearsonCorrelation` - Pearson correlation coefficient
- `correlation` - Correlation matrix

**Similarity & ML**
- `cosineSimilarityVectors` - Cosine similarity (vectors)
- `cosineSimilarity` - Cosine similarity matrix
- `cosineSimilarityTopK` - Top-K similar matches
- `pca` - Principal Component Analysis
- `kmeansClustering` - K-Means clustering
- `gradientDescent` - Linear regression training
- `linearPredict` - Linear regression prediction

**DataFrame Operations**
- `DataFrame` - Simple DataFrame class
- `dataframeFilter` - Filter rows by value
- `groupbyMean` - Group by and compute mean
- `dataframeMerge` - Merge/join dataframes
- `pivotTable` - Create pivot table
- `applyFunction` - Apply function to column
- `fillna` - Fill missing values
- `dropDuplicates` - Remove duplicate rows
- `sortValues` - Sort by column
- `reindex` - Reindex dataframe
- `melt` - Unpivot dataframe
- `selectColumns` - Select columns
- `renameColumns` - Rename columns

## Project Structure

```
optimize-me-js/
├── src/
│   ├── index.js              # Main entry point
│   ├── dsa/
│   │   ├── index.js
│   │   ├── cachingMemoization.js
│   │   ├── nodes.js
│   │   └── various.js
│   ├── math/
│   │   ├── index.js
│   │   └── computation.js
│   ├── matrix/
│   │   ├── index.js
│   │   ├── matrixOperations.js
│   │   └── signalProcessing.js
│   └── stats/
│       ├── index.js
│       ├── statistical.js
│       └── dataframe.js
├── tests/
│   ├── dsa.test.js
│   ├── math.test.js
│   ├── matrix.test.js
│   └── stats.test.js
└── package.json
```

## Testing

```bash
npm test
```

## License

ISC