/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[^a-z]/g, ' ');
   
    let words = paragraph.split(" ").filter(Boolean);
    for (let ban of banned) {
        words = words.filter(function (item) {
            return item.toLowerCase() !== ban.toLowerCase();
        })
    }
    
    const counts = new Map();
    for (const word of words) {
        const w = word.toLowerCase();
        counts.set(w, (counts.get(w) || 0) + 1);
    }
   
    const sorted = [...counts].sort((a, b) => b[1] - a[1]);
    return (sorted[0][0].toLowerCase());
};