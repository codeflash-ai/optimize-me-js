/**
 * Signal Processing Functions
 * TypeScript equivalents of Python/NumPy implementations
 */
/**
 * 1D Manual Convolution
 * @param signal - Input signal
 * @param kernel - Convolution kernel
 * @returns Convolved signal
 */
export declare function convolution1d(signal: number[], kernel: number[]): number[];
export interface FFTResult {
    real: number[];
    imag: number[];
}
/**
 * Fast Fourier Transform (Cooley-Tukey recursive)
 * @param x - Input signal (real values, length must be power of 2)
 * @returns FFT result (complex)
 */
export declare function fft(x: number[]): FFTResult;
/**
 * Inverse FFT
 * @param X - FFT result
 * @returns Time domain signal
 */
export declare function ifft(X: FFTResult): number[];
/**
 * Create Gaussian kernel for blur
 * @param size - Kernel size (must be odd)
 * @param sigma - Standard deviation
 * @returns 2D Gaussian kernel
 */
export declare function createGaussianKernel(size: number, sigma: number): number[][];
/**
 * Apply 2D convolution (for image filtering)
 * @param image - Input image
 * @param kernel - Convolution kernel
 * @returns Filtered image
 */
export declare function convolution2d(image: number[][], kernel: number[][]): number[][];
/**
 * Gaussian blur
 * @param image - Input image
 * @param kernelSize - Kernel size (odd number)
 * @param sigma - Standard deviation
 * @returns Blurred image
 */
export declare function gaussianBlur(image: number[][], kernelSize?: number, sigma?: number): number[][];
/**
 * Image rotation
 * @param image - Input image
 * @param angleDegrees - Rotation angle in degrees
 * @returns Rotated image
 */
export declare function imageRotation(image: number[][], angleDegrees: number): number[][];
/**
 * Histogram equalization
 * @param image - Input grayscale image (0-255)
 * @returns Equalized image
 */
export declare function histogramEqualization(image: number[][]): number[][];
/**
 * Rolling mean (moving average)
 * @param series - Input series
 * @param window - Window size
 * @returns Rolling mean (with NaN for incomplete windows)
 */
export declare function rollingMean(series: number[], window: number): number[];
//# sourceMappingURL=signalProcessing.d.ts.map