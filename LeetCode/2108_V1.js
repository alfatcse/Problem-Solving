/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    let res = "";
    for (let word of words) {
        if (word === [...word].reverse().join("")) {
            return word;
        }
    }
    return "";
};