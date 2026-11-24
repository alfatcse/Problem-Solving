/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let closest = Infinity;
    for (let num of nums) {
        if (Math.abs(0 - num) < Math.abs(closest)) {
            closest = num;
        }
        if (Math.abs(0 - num) ===Math.abs( closest)) {
            if (num > closest) closest = num;
        }
    }
    return closest;
};