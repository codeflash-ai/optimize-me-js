/**
 * Matrix Operations
 * TypeScript equivalents of Python/NumPy implementations
 */
/**
 * Matrix multiplication
 * @param A - First matrix
 * @param B - Second matrix
 * @returns Product matrix A * B
 */
export declare function matrixMultiply(A: number[][], B: number[][]): number[][];
/**
 * Vector dot product
 * @param a - First vector
 * @param b - Second vector
 * @returns Dot product
 */
export declare function dotProduct(a: number[], b: number[]): number;
/**
 * Matrix inverse using Gauss-Jordan elimination
 * @param matrix - Square matrix to invert
 * @returns Inverse matrix
 */
export declare function matrixInverse(matrix: number[][]): number[][];
/**
 * Matrix determinant using cofactor expansion
 * @param matrix - Square matrix
 * @returns Determinant
 */
export declare function matrixDeterminant(matrix: number[][]): number;
/**
 * LU Decomposition
 * @param A - Square matrix
 * @returns L and U matrices
 */
export declare function luDecomposition(A: number[][]): {
    L: number[][];
    U: number[][];
};
/**
 * Matrix transpose
 * @param matrix - Input matrix
 * @returns Transposed matrix
 */
export declare function matrixTranspose(matrix: number[][]): number[][];
/**
 * Solve linear system Ax = b using Gaussian elimination
 * @param A - Coefficient matrix
 * @param b - Right-hand side vector
 * @returns Solution vector x
 */
export declare function linearEquationSolver(A: number[][], b: number[]): number[];
/**
 * Create identity matrix
 * @param n - Size of matrix
 * @returns Identity matrix
 */
export declare function identityMatrix(n: number): number[][];
/**
 * Matrix addition
 * @param A - First matrix
 * @param B - Second matrix
 * @returns Sum matrix A + B
 */
export declare function matrixAdd(A: number[][], B: number[][]): number[][];
/**
 * Matrix scalar multiplication
 * @param matrix - Input matrix
 * @param scalar - Scalar value
 * @returns Scaled matrix
 */
export declare function matrixScalarMultiply(matrix: number[][], scalar: number): number[][];
/**
 * Vector magnitude (Euclidean norm)
 * @param v - Input vector
 * @returns Magnitude
 */
export declare function vectorMagnitude(v: number[]): number;
/**
 * Normalize vector
 * @param v - Input vector
 * @returns Unit vector
 */
export declare function vectorNormalize(v: number[]): number[];
//# sourceMappingURL=matrixOperations.d.ts.map