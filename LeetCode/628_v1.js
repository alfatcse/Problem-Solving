/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    if (nums.length === 3) return nums[0] * nums[1] * nums[2];
    let hasNegative = nums.some(v => v < 0);
    let hasPositive = nums.some(v => v >= 0);
    nums.sort((a, b) => a - b);
    if (!hasNegative) {
        return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    } else if (hasPositive) {
        let positive = [];
        let negative = [];
        for (let n of nums) {
            if (n < 0) {
                negative.push(n);
            }
            else {
                positive.push(n);
            }
        }
        if (negative.length >= 2) {
            if (positive[positive.length - 1] * positive[positive.length - 2] * positive[positive.length - 3] > negative[0] * negative[1] * positive[positive.length - 1]) return ((positive[positive.length - 1] * positive[positive.length - 2] * positive[positive.length - 3]));
            else return ((negative[0] * negative[1] * positive[positive.length - 1]))
        } else return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    } else {
        return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    }
};