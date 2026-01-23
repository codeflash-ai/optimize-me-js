/**
 * DataFrame-like Operations
 * TypeScript equivalents of Pandas DataFrame operations
 */
export type DataRow = Record<string, unknown>;
/**
 * Simple DataFrame class for tabular data operations
 */
export declare class DataFrame {
    data: DataRow[];
    columns: string[];
    constructor(data: DataRow[] | Record<string, unknown[]>);
    get length(): number;
    toArray(): DataRow[];
    toObject(): Record<string, unknown[]>;
}
/**
 * Filter DataFrame rows by column value
 * @param df - Array of row objects
 * @param column - Column name
 * @param value - Value to filter by
 * @returns Filtered rows
 */
export declare function dataframeFilter(df: DataRow[], column: string, value: unknown): DataRow[];
/**
 * Group by and compute mean
 * @param df - Array of row objects
 * @param groupCol - Column to group by
 * @param valueCol - Column to aggregate
 * @returns Group to mean mapping
 */
export declare function groupbyMean(df: DataRow[], groupCol: string, valueCol: string): Record<string, number>;
/**
 * Merge two dataframes
 * @param left - Left dataframe
 * @param right - Right dataframe
 * @param leftOn - Left join column
 * @param rightOn - Right join column
 * @returns Merged dataframe
 */
export declare function dataframeMerge(left: DataRow[], right: DataRow[], leftOn: string, rightOn: string): DataRow[];
/**
 * Create pivot table
 * @param df - Array of row objects
 * @param index - Index column
 * @param columns - Column to pivot
 * @param values - Values column
 * @param aggfunc - Aggregation function ('sum', 'mean', 'count')
 * @returns Pivot table as nested object
 */
export declare function pivotTable(df: DataRow[], index: string, columns: string, values: string, aggfunc?: 'sum' | 'mean' | 'count'): Record<string, Record<string, number>>;
/**
 * Apply function to column
 * @param df - Array of row objects
 * @param column - Column to apply to
 * @param func - Function to apply
 * @returns DataFrame with transformed column
 */
export declare function applyFunction<T>(df: DataRow[], column: string, func: (value: unknown) => T): DataRow[];
/**
 * Fill missing values
 * @param df - Array of row objects
 * @param column - Column to fill
 * @param value - Fill value
 * @returns DataFrame with filled values
 */
export declare function fillna(df: DataRow[], column: string, value: unknown): DataRow[];
/**
 * Drop duplicate rows
 * @param df - Array of row objects
 * @param subset - Columns to check for duplicates
 * @returns DataFrame without duplicates
 */
export declare function dropDuplicates(df: DataRow[], subset?: string[] | null): DataRow[];
/**
 * Sort dataframe by column (bubble sort - intentionally inefficient)
 * @param df - Array of row objects
 * @param by - Column to sort by
 * @param ascending - Sort order
 * @returns Sorted dataframe
 */
export declare function sortValues(df: DataRow[], by: string, ascending?: boolean): DataRow[];
/**
 * Reindex dataframe
 * @param df - Array of row objects
 * @param newIndex - New index values
 * @returns Reindexed dataframe
 */
export declare function reindex(df: DataRow[], newIndex: unknown[]): DataRow[];
/**
 * Melt (unpivot) dataframe
 * @param df - Array of row objects
 * @param idVars - ID variables
 * @param valueVars - Value variables to unpivot
 * @returns Melted dataframe
 */
export declare function melt(df: DataRow[], idVars: string[], valueVars: string[]): DataRow[];
/**
 * Select columns from dataframe
 * @param df - Array of row objects
 * @param columns - Columns to select
 * @returns Dataframe with selected columns
 */
export declare function selectColumns(df: DataRow[], columns: string[]): DataRow[];
/**
 * Rename columns
 * @param df - Array of row objects
 * @param mapping - Old name to new name mapping
 * @returns Dataframe with renamed columns
 */
export declare function renameColumns(df: DataRow[], mapping: Record<string, string>): DataRow[];
//# sourceMappingURL=dataframe.d.ts.map