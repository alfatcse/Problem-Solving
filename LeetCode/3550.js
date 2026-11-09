/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let num = 0; num < nums.length; num++) {
        if (num === nums[num]
            .toString()
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0)) {
            return num;
        }
    }
    return -1;
};