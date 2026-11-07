/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = (items, ruleKey, ruleValue) => {
    const idx = { type: 0, color: 1, name: 2 }[ruleKey];
    return items.filter(item => item[idx] === ruleValue).length;
};