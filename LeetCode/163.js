/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
    let res = [];
    if (nums.length === 0) {
        res.push([lower, upper]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 && nums[i] > lower) {
            res.push([lower, nums[i] - 1]);
        }
        if (i !== nums.length - 1) {
            if (nums[i] + 1 <= nums[i + 1] - 1) res.push([nums[i] + 1, nums[i + 1] - 1]);
        }
        if (i === nums.length - 1 && nums[i] < upper) {
            res.push([nums[i] + 1, upper]);
        }
    }
    return res;
};