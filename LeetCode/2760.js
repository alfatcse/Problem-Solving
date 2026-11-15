/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
    let best = 0;
    for (let l = 0; l < nums.length; l++) {
        if (nums[l] % 2 !== 0 || nums[l] > threshold) continue;
        let r = l;
        while (nums[r] % 2 !== nums[r + 1] % 2 && r + 1 < nums.length && nums[r + 1] <= threshold) {
            r++;
        }
        best = Math.max(best, r - l + 1);
    }
    return best;
};