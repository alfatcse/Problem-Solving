/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    const counts = new Map();
    for (const x of nums) {
        if (x % 2 === 0) counts.set(x, (counts.get(x) || 0) + 1);
    }
    if (counts.size === 0) return -1;
    const sorted = [...counts].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    return sorted[0][0];
};