/**
 * Statistical and Machine Learning Functions
 * TypeScript equivalents of Python/NumPy/Pandas implementations
 */

/**
 * Compute mean of array
 * @param arr - Input array
 * @returns Mean value
 */
export function mean(arr: number[]): number {
  if (arr.length === 0) return NaN;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/**
 * Compute standard deviation
 * @param arr - Input array
 * @param sample - Whether to use sample std (n-1)
 * @returns Standard deviation
 */
export function std(arr: number[], sample: boolean = false): number {
  if (arr.length === 0) return NaN;
  const m = mean(arr);
  const squaredDiffs = arr.map(x => (x - m) ** 2);
  const divisor = sample ? arr.length - 1 : arr.length;
  return Math.sqrt(squaredDiffs.reduce((a, b) => a + b, 0) / divisor);
}

/**
 * Compute variance
 * @param arr - Input array
 * @param sample - Whether to use sample variance (n-1)
 * @returns Variance
 */
export function variance(arr: number[], sample: boolean = false): number {
  const s = std(arr, sample);
  return s * s;
}

/**
 * Compute median
 * @param arr - Input array
 * @returns Median value
 */
export function median(arr: number[]): number {
  if (arr.length === 0) return NaN;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

export interface DescribeResult {
  count: number;
  mean: number;
  std: number;
  min: number;
  '25%': number;
  '50%': number;
  '75%': number;
  max: number;
}

/**
 * Compute descriptive statistics
 * @param series - Input series
 * @returns Statistics object
 */
export function describe(series: number[]): DescribeResult {
  const sorted = [...series].sort((a, b) => a - b);
  const n = series.length;

  return {
    count: n,
    mean: mean(series),
    std: std(series),
    min: sorted[0],
    '25%': sorted[Math.floor(n * 0.25)],
    '50%': median(series),
    '75%': sorted[Math.floor(n * 0.75)],
    max: sorted[n - 1]
  };
}

/**
 * Cosine similarity between two vectors
 * @param a - First vector
 * @param b - Second vector
 * @returns Cosine similarity (-1 to 1)
 */
export function cosineSimilarityVectors(a: number[], b: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  if (denominator === 0) return 0;

  return dotProduct / denominator;
}

/**
 * Cosine similarity matrix between two sets of vectors
 * @param X - First matrix (rows are vectors)
 * @param Y - Second matrix (rows are vectors)
 * @returns Similarity matrix
 */
export function cosineSimilarity(X: number[][], Y: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < X.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < Y.length; j++) {
      row.push(cosineSimilarityVectors(X[i], Y[j]));
    }
    result.push(row);
  }

  return result;
}

export interface TopKMatch {
  xIndex: number;
  yIndex: number;
  score: number;
}

/**
 * Cosine similarity with top-k filtering
 * @param X - First matrix
 * @param Y - Second matrix
 * @param topK - Number of top matches to return
 * @param scoreThreshold - Minimum score threshold
 * @returns Top matches for each X row
 */
export function cosineSimilarityTopK(X: number[][], Y: number[][], topK: number = 5, scoreThreshold: number = 0): TopKMatch[][] {
  const results: TopKMatch[][] = [];

  for (let i = 0; i < X.length; i++) {
    const scores: TopKMatch[] = [];
    for (let j = 0; j < Y.length; j++) {
      const score = cosineSimilarityVectors(X[i], Y[j]);
      if (score >= scoreThreshold) {
        scores.push({ xIndex: i, yIndex: j, score });
      }
    }

    // Sort by score descending and take top k
    scores.sort((a, b) => b.score - a.score);
    results.push(scores.slice(0, topK));
  }

  return results;
}

/**
 * Pearson correlation coefficient
 * @param x - First array
 * @param y - Second array
 * @returns Correlation coefficient
 */
export function pearsonCorrelation(x: number[], y: number[]): number {
  const n = x.length;
  const meanX = mean(x);
  const meanY = mean(y);

  let numerator = 0;
  let denomX = 0;
  let denomY = 0;

  for (let i = 0; i < n; i++) {
    const dx = x[i] - meanX;
    const dy = y[i] - meanY;
    numerator += dx * dy;
    denomX += dx * dx;
    denomY += dy * dy;
  }

  const denominator = Math.sqrt(denomX) * Math.sqrt(denomY);
  if (denominator === 0) return 0;

  return numerator / denominator;
}

/**
 * Correlation matrix for dataframe-like object
 * @param df - Object with column arrays
 * @returns Correlation matrix as object
 */
export function correlation(df: Record<string, number[]>): Record<string, Record<string, number>> {
  const columns = Object.keys(df);
  const result: Record<string, Record<string, number>> = {};

  for (const col1 of columns) {
    result[col1] = {};
    for (const col2 of columns) {
      result[col1][col2] = pearsonCorrelation(df[col1], df[col2]);
    }
  }

  return result;
}

export interface PCAResult {
  components: number[][];
  explained: number[];
  transformed: number[][];
}

/**
 * Principal Component Analysis
 * @param X - Data matrix (rows are samples)
 * @param nComponents - Number of components
 * @returns PCA result
 */
export function pca(X: number[][], nComponents: number): PCAResult {
  const n = X.length;
  const m = X[0].length;

  // Center the data
  const means: number[] = Array(m).fill(0);
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      means[j] += X[i][j];
    }
    means[j] /= n;
  }

  const centered: number[][] = X.map(row =>
    row.map((val, j) => val - means[j])
  );

  // Compute covariance matrix
  const cov: number[][] = Array(m).fill(null).map(() => Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += centered[k][i] * centered[k][j];
      }
      cov[i][j] = sum / (n - 1);
    }
  }

  // Power iteration to find principal components (simplified)
  const components: number[][] = [];
  const eigenvalues: number[] = [];
  const covCopy: number[][] = cov.map(row => [...row]);

  for (let c = 0; c < nComponents; c++) {
    // Initialize random vector
    let v: number[] = Array(m).fill(0).map(() => Math.random() - 0.5);
    let norm = Math.sqrt(v.reduce((a, b) => a + b * b, 0));
    v = v.map(x => x / norm);

    // Power iteration
    for (let iter = 0; iter < 100; iter++) {
      // Multiply by covariance matrix
      const newV: number[] = Array(m).fill(0);
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
          newV[i] += covCopy[i][j] * v[j];
        }
      }

      // Normalize
      norm = Math.sqrt(newV.reduce((a, b) => a + b * b, 0));
      if (norm > 0) {
        v = newV.map(x => x / norm);
      }
    }

    // Compute eigenvalue
    let eigenvalue = 0;
    const Av: number[] = Array(m).fill(0);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        Av[i] += covCopy[i][j] * v[j];
      }
    }
    for (let i = 0; i < m; i++) {
      eigenvalue += v[i] * Av[i];
    }

    components.push(v);
    eigenvalues.push(eigenvalue);

    // Deflate covariance matrix
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        covCopy[i][j] -= eigenvalue * v[i] * v[j];
      }
    }
  }

  // Transform data
  const transformed: number[][] = centered.map(row => {
    return components.map(comp => {
      let dot = 0;
      for (let i = 0; i < m; i++) {
        dot += row[i] * comp[i];
      }
      return dot;
    });
  });

  // Compute explained variance ratio
  const totalVariance = eigenvalues.reduce((a, b) => a + Math.abs(b), 0);
  const explained = eigenvalues.map(e => Math.abs(e) / totalVariance);

  return { components, explained, transformed };
}

export interface KMeansResult {
  centroids: number[][];
  labels: number[];
}

/**
 * K-Means clustering
 * @param X - Data matrix
 * @param k - Number of clusters
 * @param maxIter - Maximum iterations
 * @returns Cluster result
 */
export function kmeansClustering(X: number[][], k: number, maxIter: number = 100): KMeansResult {
  const n = X.length;
  const m = X[0].length;

  // Initialize centroids randomly
  const indices: number[] = [];
  while (indices.length < k) {
    const idx = Math.floor(Math.random() * n);
    if (!indices.includes(idx)) {
      indices.push(idx);
    }
  }
  let centroids: number[][] = indices.map(i => [...X[i]]);

  let labels: number[] = Array(n).fill(0);

  for (let iter = 0; iter < maxIter; iter++) {
    // Assign points to nearest centroid
    const newLabels: number[] = X.map(point => {
      let minDist = Infinity;
      let label = 0;
      for (let c = 0; c < k; c++) {
        let dist = 0;
        for (let j = 0; j < m; j++) {
          dist += (point[j] - centroids[c][j]) ** 2;
        }
        if (dist < minDist) {
          minDist = dist;
          label = c;
        }
      }
      return label;
    });

    // Check convergence
    let changed = false;
    for (let i = 0; i < n; i++) {
      if (newLabels[i] !== labels[i]) {
        changed = true;
        break;
      }
    }
    labels = newLabels;

    if (!changed) break;

    // Update centroids
    const newCentroids: number[][] = Array(k).fill(null).map(() => Array(m).fill(0));
    const counts: number[] = Array(k).fill(0);

    for (let i = 0; i < n; i++) {
      const c = labels[i];
      counts[c]++;
      for (let j = 0; j < m; j++) {
        newCentroids[c][j] += X[i][j];
      }
    }

    for (let c = 0; c < k; c++) {
      if (counts[c] > 0) {
        for (let j = 0; j < m; j++) {
          newCentroids[c][j] /= counts[c];
        }
      }
    }

    centroids = newCentroids;
  }

  return { centroids, labels };
}

export interface LinearRegressionResult {
  weights: number[];
  bias: number;
}

/**
 * Gradient descent for linear regression
 * @param X - Feature matrix
 * @param y - Target values
 * @param learningRate - Learning rate
 * @param iterations - Number of iterations
 * @returns Trained parameters
 */
export function gradientDescent(X: number[][], y: number[], learningRate: number = 0.01, iterations: number = 1000): LinearRegressionResult {
  const n = X.length;
  const m = X[0].length;

  // Initialize weights and bias
  let weights: number[] = Array(m).fill(0);
  let bias = 0;

  for (let iter = 0; iter < iterations; iter++) {
    // Compute predictions
    const predictions: number[] = X.map(row => {
      let pred = bias;
      for (let j = 0; j < m; j++) {
        pred += row[j] * weights[j];
      }
      return pred;
    });

    // Compute gradients
    const errors: number[] = predictions.map((p, i) => p - y[i]);

    const gradWeights: number[] = Array(m).fill(0);
    for (let j = 0; j < m; j++) {
      for (let i = 0; i < n; i++) {
        gradWeights[j] += errors[i] * X[i][j];
      }
      gradWeights[j] /= n;
    }

    let gradBias = 0;
    for (let i = 0; i < n; i++) {
      gradBias += errors[i];
    }
    gradBias /= n;

    // Update parameters
    for (let j = 0; j < m; j++) {
      weights[j] -= learningRate * gradWeights[j];
    }
    bias -= learningRate * gradBias;
  }

  return { weights, bias };
}

/**
 * Predict using linear regression model
 * @param X - Feature matrix
 * @param weights - Model weights
 * @param bias - Model bias
 * @returns Predictions
 */
export function linearPredict(X: number[][], weights: number[], bias: number): number[] {
  return X.map(row => {
    let pred = bias;
    for (let j = 0; j < row.length; j++) {
      pred += row[j] * weights[j];
    }
    return pred;
  });
}
