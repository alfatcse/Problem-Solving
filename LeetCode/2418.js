/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const map = [];
    let res = [];
    heights.forEach((value, index) => map.push({ value, index }));
    map.sort((a, b) => b.value - a.value);
    for (let m of map) {
        res.push(names[m.index]);
    }
    return res;
};