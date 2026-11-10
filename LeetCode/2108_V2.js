/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (const word of words) {
        if (isPalindrome(word)) return word;
    }
    return "";
};

function isPalindrome(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l++] !== s[r--]) return false;
    }
    return true;
}