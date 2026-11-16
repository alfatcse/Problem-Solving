/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function (nums) {
    const average = array => array.reduce((a, b) => a + b) / array.length;
    let a = average([...nums])
    let i = 1;
    while (true) {
        if (i > a && !nums.includes(i)) {
            return i;
        }
        i++
    }
};