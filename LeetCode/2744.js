/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }
    // e.g. [3,1,2,2,2,1,3] → {3:[0,6], 1:[1,5], 2:[2,3,4]}

    let count = 0;
    for (let idx of map.values()) {
        for (let a = 0; a < idx.length; a++) {
            for (let b = a + 1; b < idx.length; b++) {
                if ((idx[a] * idx[b]) % k === 0) count++;
            }
        }
    }
    return count;
};