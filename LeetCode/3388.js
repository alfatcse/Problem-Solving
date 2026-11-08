/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function (nums) {
    let res = 0;
    for (let num of nums) {
        if (num % 2 === 0) {
            res|=num
        }
    }
    return res;
};