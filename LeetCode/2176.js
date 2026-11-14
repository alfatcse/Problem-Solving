/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const map = new Map(); // value -> Map(gcd -> count)
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
        const g = gcd(j, k);
        if (!map.has(nums[j])) map.set(nums[j], new Map());
        const seen = map.get(nums[j]);

        for (const [g2, c] of seen) {
            if ((g * g2) % k === 0) count += c;
        }
        seen.set(g, (seen.get(g) || 0) + 1);
    }
    return count;
};