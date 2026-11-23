/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const bannedSet = new Set(banned.map(w => w.toLowerCase()));

    const words = paragraph
        .toLowerCase()
        .replace(/[^a-z]/g, ' ')        
        .split(' ')
        .filter(Boolean);               

    const counts = new Map();
    for (const w of words) {
        if (bannedSet.has(w)) continue;
        counts.set(w, (counts.get(w) || 0) + 1);
    }

    let best = '', bestCount = 0;
    for (const [w, c] of counts) {
        if (c > bestCount) { best = w; bestCount = c; }
    }
    return best;
};