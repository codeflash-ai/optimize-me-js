/**
 * DataFrame-like Operations
 * TypeScript equivalents of Pandas DataFrame operations
 */

export type DataRow = Record<string, unknown>;

/**
 * Simple DataFrame class for tabular data operations
 */
export class DataFrame {
  data: DataRow[];
  columns: string[];

  constructor(data: DataRow[] | Record<string, unknown[]>) {
    if (Array.isArray(data)) {
      // Array of objects format
      this.data = data;
      this.columns = data.length > 0 ? Object.keys(data[0]) : [];
    } else {
      // Object of arrays format
      const columns = Object.keys(data);
      const length = columns.length > 0 ? (data[columns[0]] as unknown[]).length : 0;
      this.data = [];
      for (let i = 0; i < length; i++) {
        const row: DataRow = {};
        for (const col of columns) {
          row[col] = (data[col] as unknown[])[i];
        }
        this.data.push(row);
      }
      this.columns = columns;
    }
  }

  get length(): number {
    return this.data.length;
  }

  toArray(): DataRow[] {
    return this.data;
  }

  toObject(): Record<string, unknown[]> {
    const result: Record<string, unknown[]> = {};
    for (const col of this.columns) {
      result[col] = this.data.map(row => row[col]);
    }
    return result;
  }
}

/**
 * Filter DataFrame rows by column value
 * @param df - Array of row objects
 * @param column - Column name
 * @param value - Value to filter by
 * @returns Filtered rows
 */
export function dataframeFilter(df: DataRow[], column: string, value: unknown): DataRow[] {
  const result: DataRow[] = [];

  for (const row of df) {
    if (row[column] === value) {
      result.push({ ...row });
    }
  }

  return result;
}

/**
 * Group by and compute mean
 * @param df - Array of row objects
 * @param groupCol - Column to group by
 * @param valueCol - Column to aggregate
 * @returns Group to mean mapping
 */
export function groupbyMean(df: DataRow[], groupCol: string, valueCol: string): Record<string, number> {
  const groups: Record<string, { sum: number; count: number }> = {};

  for (const row of df) {
    const key = String(row[groupCol]);
    if (!groups[key]) {
      groups[key] = { sum: 0, count: 0 };
    }
    groups[key].sum += row[valueCol] as number;
    groups[key].count++;
  }

  const result: Record<string, number> = {};
  for (const [key, { sum, count }] of Object.entries(groups)) {
    result[key] = sum / count;
  }

  return result;
}

/**
 * Merge two dataframes
 * @param left - Left dataframe
 * @param right - Right dataframe
 * @param leftOn - Left join column
 * @param rightOn - Right join column
 * @returns Merged dataframe
 */
export function dataframeMerge(left: DataRow[], right: DataRow[], leftOn: string, rightOn: string): DataRow[] {
  const result: DataRow[] = [];

  for (const leftRow of left) {
    for (const rightRow of right) {
      if (leftRow[leftOn] === rightRow[rightOn]) {
        const merged: DataRow = { ...leftRow };
        for (const [key, value] of Object.entries(rightRow)) {
          if (key !== rightOn) {
            merged[key] = value;
          }
        }
        result.push(merged);
      }
    }
  }

  return result;
}

/**
 * Create pivot table
 * @param df - Array of row objects
 * @param index - Index column
 * @param columns - Column to pivot
 * @param values - Values column
 * @param aggfunc - Aggregation function ('sum', 'mean', 'count')
 * @returns Pivot table as nested object
 */
export function pivotTable(
  df: DataRow[],
  index: string,
  columns: string,
  values: string,
  aggfunc: 'sum' | 'mean' | 'count' = 'sum'
): Record<string, Record<string, number>> {
  const pivot: Record<string, Record<string, number>> = {};
  const counts: Record<string, Record<string, number>> = {};

  for (const row of df) {
    const idxVal = String(row[index]);
    const colVal = String(row[columns]);
    const val = row[values] as number;

    if (!pivot[idxVal]) {
      pivot[idxVal] = {};
      counts[idxVal] = {};
    }
    if (pivot[idxVal][colVal] === undefined) {
      pivot[idxVal][colVal] = 0;
      counts[idxVal][colVal] = 0;
    }

    pivot[idxVal][colVal] += val;
    counts[idxVal][colVal]++;
  }

  if (aggfunc === 'mean') {
    for (const idx of Object.keys(pivot)) {
      for (const col of Object.keys(pivot[idx])) {
        pivot[idx][col] /= counts[idx][col];
      }
    }
  } else if (aggfunc === 'count') {
    return counts;
  }

  return pivot;
}

/**
 * Apply function to column
 * @param df - Array of row objects
 * @param column - Column to apply to
 * @param func - Function to apply
 * @returns DataFrame with transformed column
 */
export function applyFunction<T>(df: DataRow[], column: string, func: (value: unknown) => T): DataRow[] {
  return df.map(row => ({
    ...row,
    [column]: func(row[column])
  }));
}

/**
 * Fill missing values
 * @param df - Array of row objects
 * @param column - Column to fill
 * @param value - Fill value
 * @returns DataFrame with filled values
 */
export function fillna(df: DataRow[], column: string, value: unknown): DataRow[] {
  return df.map(row => ({
    ...row,
    [column]: row[column] === null || row[column] === undefined ? value : row[column]
  }));
}

/**
 * Drop duplicate rows
 * @param df - Array of row objects
 * @param subset - Columns to check for duplicates
 * @returns DataFrame without duplicates
 */
export function dropDuplicates(df: DataRow[], subset: string[] | null = null): DataRow[] {
  const seen = new Set<string>();
  const result: DataRow[] = [];

  for (const row of df) {
    const key = subset
      ? subset.map(col => JSON.stringify(row[col])).join('|')
      : JSON.stringify(row);

    if (!seen.has(key)) {
      seen.add(key);
      result.push({ ...row });
    }
  }

  return result;
}

/**
 * Sort dataframe by column (bubble sort - intentionally inefficient)
 * @param df - Array of row objects
 * @param by - Column to sort by
 * @param ascending - Sort order
 * @returns Sorted dataframe
 */
export function sortValues(df: DataRow[], by: string, ascending: boolean = true): DataRow[] {
  const result = df.map(row => ({ ...row }));
  const n = result.length;

  // Bubble sort (intentionally inefficient like Python version)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const shouldSwap = ascending
        ? (result[j][by] as number) > (result[j + 1][by] as number)
        : (result[j][by] as number) < (result[j + 1][by] as number);

      if (shouldSwap) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

/**
 * Reindex dataframe
 * @param df - Array of row objects
 * @param newIndex - New index values
 * @returns Reindexed dataframe
 */
export function reindex(df: DataRow[], newIndex: unknown[]): DataRow[] {
  const columns = df.length > 0 ? Object.keys(df[0]) : [];
  const result: DataRow[] = [];

  for (let i = 0; i < newIndex.length; i++) {
    if (i < df.length) {
      result.push({ ...df[i], _index: newIndex[i] });
    } else {
      const row: DataRow = { _index: newIndex[i] };
      for (const col of columns) {
        row[col] = null;
      }
      result.push(row);
    }
  }

  return result;
}

/**
 * Melt (unpivot) dataframe
 * @param df - Array of row objects
 * @param idVars - ID variables
 * @param valueVars - Value variables to unpivot
 * @returns Melted dataframe
 */
export function melt(df: DataRow[], idVars: string[], valueVars: string[]): DataRow[] {
  const result: DataRow[] = [];

  for (const row of df) {
    for (const valueVar of valueVars) {
      const newRow: DataRow = { variable: valueVar, value: row[valueVar] };
      for (const idVar of idVars) {
        newRow[idVar] = row[idVar];
      }
      result.push(newRow);
    }
  }

  return result;
}

/**
 * Select columns from dataframe
 * @param df - Array of row objects
 * @param columns - Columns to select
 * @returns Dataframe with selected columns
 */
export function selectColumns(df: DataRow[], columns: string[]): DataRow[] {
  return df.map(row => {
    const newRow: DataRow = {};
    for (const col of columns) {
      newRow[col] = row[col];
    }
    return newRow;
  });
}

/**
 * Rename columns
 * @param df - Array of row objects
 * @param mapping - Old name to new name mapping
 * @returns Dataframe with renamed columns
 */
export function renameColumns(df: DataRow[], mapping: Record<string, string>): DataRow[] {
  return df.map(row => {
    const newRow: DataRow = {};
    for (const [key, value] of Object.entries(row)) {
      const newKey = mapping[key] || key;
      newRow[newKey] = value;
    }
    return newRow;
  });
}
