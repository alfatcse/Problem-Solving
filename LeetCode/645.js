/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let res = Array(nums.length).fill(0);
    for (let num of nums) {
        res[num - 1] += 1;
    }
    let missing = 0, duble = 0;
    for (let i = 0; i < res.length; i++) {
        if (res[i] === 0) missing = i + 1;
        if (res[i] === 2) duble = i + 1;
    }
    return [duble,missing];
};