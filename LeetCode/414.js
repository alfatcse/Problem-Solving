/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums = new Set(nums);
    nums = [...nums];
    nums.sort((a, b) => b - a);
    if (nums.length < 3) return (Math.max(...nums));
    else return (nums[2]);
};