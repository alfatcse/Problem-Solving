/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res+=nums.slice(Math.max(0, i - nums[i]), i+1).reduce((a, b) => a + b, 0);
    }
    return res; 
};