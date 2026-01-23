"use strict";
/**
 * DataFrame-like Operations
 * TypeScript equivalents of Pandas DataFrame operations
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFrame = void 0;
exports.dataframeFilter = dataframeFilter;
exports.groupbyMean = groupbyMean;
exports.dataframeMerge = dataframeMerge;
exports.pivotTable = pivotTable;
exports.applyFunction = applyFunction;
exports.fillna = fillna;
exports.dropDuplicates = dropDuplicates;
exports.sortValues = sortValues;
exports.reindex = reindex;
exports.melt = melt;
exports.selectColumns = selectColumns;
exports.renameColumns = renameColumns;
/**
 * Simple DataFrame class for tabular data operations
 */
class DataFrame {
    constructor(data) {
        if (Array.isArray(data)) {
            // Array of objects format
            this.data = data;
            this.columns = data.length > 0 ? Object.keys(data[0]) : [];
        }
        else {
            // Object of arrays format
            const columns = Object.keys(data);
            const length = columns.length > 0 ? data[columns[0]].length : 0;
            this.data = [];
            for (let i = 0; i < length; i++) {
                const row = {};
                for (const col of columns) {
                    row[col] = data[col][i];
                }
                this.data.push(row);
            }
            this.columns = columns;
        }
    }
    get length() {
        return this.data.length;
    }
    toArray() {
        return this.data;
    }
    toObject() {
        const result = {};
        for (const col of this.columns) {
            result[col] = this.data.map(row => row[col]);
        }
        return result;
    }
}
exports.DataFrame = DataFrame;
/**
 * Filter DataFrame rows by column value
 * @param df - Array of row objects
 * @param column - Column name
 * @param value - Value to filter by
 * @returns Filtered rows
 */
function dataframeFilter(df, column, value) {
    const result = [];
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
function groupbyMean(df, groupCol, valueCol) {
    const groups = {};
    for (const row of df) {
        const key = String(row[groupCol]);
        if (!groups[key]) {
            groups[key] = { sum: 0, count: 0 };
        }
        groups[key].sum += row[valueCol];
        groups[key].count++;
    }
    const result = {};
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
function dataframeMerge(left, right, leftOn, rightOn) {
    const result = [];
    for (const leftRow of left) {
        for (const rightRow of right) {
            if (leftRow[leftOn] === rightRow[rightOn]) {
                const merged = { ...leftRow };
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
function pivotTable(df, index, columns, values, aggfunc = 'sum') {
    const pivot = {};
    const counts = {};
    for (const row of df) {
        const idxVal = String(row[index]);
        const colVal = String(row[columns]);
        const val = row[values];
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
    }
    else if (aggfunc === 'count') {
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
function applyFunction(df, column, func) {
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
function fillna(df, column, value) {
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
function dropDuplicates(df, subset = null) {
    const seen = new Set();
    const result = [];
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
function sortValues(df, by, ascending = true) {
    const result = df.map(row => ({ ...row }));
    const n = result.length;
    // Bubble sort (intentionally inefficient like Python version)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const shouldSwap = ascending
                ? result[j][by] > result[j + 1][by]
                : result[j][by] < result[j + 1][by];
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
function reindex(df, newIndex) {
    const columns = df.length > 0 ? Object.keys(df[0]) : [];
    const result = [];
    for (let i = 0; i < newIndex.length; i++) {
        if (i < df.length) {
            result.push({ ...df[i], _index: newIndex[i] });
        }
        else {
            const row = { _index: newIndex[i] };
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
function melt(df, idVars, valueVars) {
    const result = [];
    for (const row of df) {
        for (const valueVar of valueVars) {
            const newRow = { variable: valueVar, value: row[valueVar] };
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
function selectColumns(df, columns) {
    return df.map(row => {
        const newRow = {};
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
function renameColumns(df, mapping) {
    return df.map(row => {
        const newRow = {};
        for (const [key, value] of Object.entries(row)) {
            const newKey = mapping[key] || key;
            newRow[newKey] = value;
        }
        return newRow;
    });
}
//# sourceMappingURL=dataframe.js.map