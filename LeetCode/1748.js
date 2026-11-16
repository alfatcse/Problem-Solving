/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const counts = new Map();
    let sum = 0;
    for (const x of nums) counts.set(x, (counts.get(x) || 0) + 1);
    [...counts].map((value) => {
        if (value[1] === 1) sum += value[0];
    })
    return sum;
};