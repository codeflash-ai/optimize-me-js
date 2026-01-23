/**
 * Statistical and Machine Learning Functions
 * TypeScript equivalents of Python/NumPy/Pandas implementations
 */
/**
 * Compute mean of array
 * @param arr - Input array
 * @returns Mean value
 */
export declare function mean(arr: number[]): number;
/**
 * Compute standard deviation
 * @param arr - Input array
 * @param sample - Whether to use sample std (n-1)
 * @returns Standard deviation
 */
export declare function std(arr: number[], sample?: boolean): number;
/**
 * Compute variance
 * @param arr - Input array
 * @param sample - Whether to use sample variance (n-1)
 * @returns Variance
 */
export declare function variance(arr: number[], sample?: boolean): number;
/**
 * Compute median
 * @param arr - Input array
 * @returns Median value
 */
export declare function median(arr: number[]): number;
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
export declare function describe(series: number[]): DescribeResult;
/**
 * Cosine similarity between two vectors
 * @param a - First vector
 * @param b - Second vector
 * @returns Cosine similarity (-1 to 1)
 */
export declare function cosineSimilarityVectors(a: number[], b: number[]): number;
/**
 * Cosine similarity matrix between two sets of vectors
 * @param X - First matrix (rows are vectors)
 * @param Y - Second matrix (rows are vectors)
 * @returns Similarity matrix
 */
export declare function cosineSimilarity(X: number[][], Y: number[][]): number[][];
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
export declare function cosineSimilarityTopK(X: number[][], Y: number[][], topK?: number, scoreThreshold?: number): TopKMatch[][];
/**
 * Pearson correlation coefficient
 * @param x - First array
 * @param y - Second array
 * @returns Correlation coefficient
 */
export declare function pearsonCorrelation(x: number[], y: number[]): number;
/**
 * Correlation matrix for dataframe-like object
 * @param df - Object with column arrays
 * @returns Correlation matrix as object
 */
export declare function correlation(df: Record<string, number[]>): Record<string, Record<string, number>>;
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
export declare function pca(X: number[][], nComponents: number): PCAResult;
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
export declare function kmeansClustering(X: number[][], k: number, maxIter?: number): KMeansResult;
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
export declare function gradientDescent(X: number[][], y: number[], learningRate?: number, iterations?: number): LinearRegressionResult;
/**
 * Predict using linear regression model
 * @param X - Feature matrix
 * @param weights - Model weights
 * @param bias - Model bias
 * @returns Predictions
 */
export declare function linearPredict(X: number[][], weights: number[], bias: number): number[];
//# sourceMappingURL=statistical.d.ts.map