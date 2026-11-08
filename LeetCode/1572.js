/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0, j = mat.length - 1; i < mat.length, j >= 0; j--, i++) {
        sum += mat[i][i] + mat[i][j];
        if (i === j) {
            sum -= mat[i][j]
        }
    }
    return sum;
};