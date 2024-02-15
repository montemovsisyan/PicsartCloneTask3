function countObjects(matrix) {
    if (!matrix || matrix.length === 0) {
        return 0;
    }

    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] !== 1) {
            return;
        }
        matrix[row][col] = "#";
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    let objectCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                dfs(i, j);
                objectCount++;
            }
        }
    }

    return objectCount;
}

// Example usage:
const matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0]
];

console.log("Output:", countObjects(matrix));
