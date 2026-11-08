/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let res = new Set();
    for (let num = 0; num < nums.length; num++) {
        if (res.has(nums[num])) return true
        res.add(nums[num]);
    }
    return false;
};