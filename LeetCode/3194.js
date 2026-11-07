/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let small = Infinity;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        small = Math.min(small, (nums[i] + nums[j]) / 2);
    }
    return small;
};