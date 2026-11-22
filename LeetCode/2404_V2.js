/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    const counts = new Map();
    for (const x of nums) {
        if (x % 2 === 0) counts.set(x, (counts.get(x) || 0) + 1);
    }
    let best = -1, bestCount = 0;
    for (const [value, count] of counts) {
        if (count > bestCount || (count === bestCount && value < best)) {
            best = value;
            bestCount = count;
        }
    }
    return best;
};