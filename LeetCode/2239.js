/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    nums.push(0);
    nums.sort((a, b) => a - b);
    const i = nums.indexOf(0);
    if (nums[i + 1] !== undefined && nums[i - 1] !== undefined) {
        if (Math.abs(nums[i - 1]) > Math.abs(nums[i + 1])) {
            return nums[i + 1];
        } else if (Math.abs(nums[i - 1]) < Math.abs(nums[i + 1])) {
            return nums[i - 1];
        } else if (Math.abs(nums[i - 1]) === Math.abs(nums[i + 1])) {
            return nums[i + 1];
        }
    } else if (nums[i + 1] === undefined) { return nums[i - 1]; }
    else if (nums[i - 1] === undefined) { return nums[i + 1]; }
};