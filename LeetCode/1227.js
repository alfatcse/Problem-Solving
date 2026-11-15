/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
    if (n === 1) return Number((1 / n).toFixed(5));
    else return Number((1 / 2).toFixed(5));
};