/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let newNum = [...nums].sort((a, b) => a - b);
    if (newNum[nums.length - 2] * 2 <= newNum[nums.length - 1]) return nums.indexOf(newNum[nums.length - 1]);
    return -1;
};