/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const counts = new Map();
    for (const x of nums) counts.set(x, (counts.get(x) || 0) + 1);
    const sorted = [...counts].sort((a, b) => b[1] - a[1]);   
    return sorted[0][0];
};