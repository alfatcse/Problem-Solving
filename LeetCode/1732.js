/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let res = [];
    res.push(0);
    for (let i = 0; i < gain.length; i++) {
        if (i === 0) {
            res.push(res[0] + gain[i])
        } else {
            res.push(res[i] + gain[i])
        }
    }
   return Math.max(...res);
};