/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const a = s.split(" ").filter(Boolean);
    return (a[a.length - 1].length);
};