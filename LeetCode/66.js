/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return Array.from(String(BigInt(digits.join(''))+1n), Number);
};