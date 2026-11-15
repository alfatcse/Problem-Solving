/**
 * @param {number[]} deck
 * @return {boolean}
 */
const gcd = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};
var hasGroupsSizeX = function (deck) {
    if (deck.length <= 1) return false;
    const counts = new Map();
    for (const x of deck) counts.set(x, (counts.get(x) || 0) + 1);
    let a = [...counts.values()];
    const g = a.reduce((x, y) => gcd(x, y));
    return g>=2;
};