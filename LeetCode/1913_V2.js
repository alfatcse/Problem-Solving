/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProductDifference = function (nums) {
    let max1 = 0, max2 = 0;               // largest, 2nd largest
    let min1 = Infinity, min2 = Infinity; // smallest, 2nd smallest

    for (const n of nums) {
        if (n > max1) {
            max2 = max1;
            max1 = n;
        } else if (n > max2) {
            max2 = n;
        }

        if (n < min1) {
            min2 = min1;
            min1 = n;
        } else if (n < min2) {
            min2 = n;
        }
    }

    return max1 * max2 - min1 * min2;
};