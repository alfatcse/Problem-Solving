/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        let a = Math.min(height[i], height[j]) * (j - i);
        if (Math.min(height[i], height[j]) === height[i]) i++
        else j--;
        if (a > max) max = a;
    }
   return max;
};