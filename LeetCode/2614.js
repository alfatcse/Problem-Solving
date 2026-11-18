/**
 * @param {number[][]} nums
 * @return {number}
 */
function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
var diagonalPrime = function (nums) {
    let res = 0;
    for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
        if (res < nums[i][i] && isPrime(nums[i][i])) {
            res = nums[i][i];
        }
        if (res < nums[i][j] && isPrime(nums[i][j])) {
            res = nums[i][j];
        }
    }
    return res;
};