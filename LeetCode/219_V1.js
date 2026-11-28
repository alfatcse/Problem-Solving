/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = new Map();
    nums.forEach((value, i) => {
        if (!map.has(value)) map.set(value, []);
        map.get(value).push(i + 1);
    });
    const result = [...map].map(([value, indexes]) => ({ value, indexes }));
    for (let r of result) {
        if (r.indexes.length >= 2) {
           for(let i=0;i<r.indexes.length;i++){
            if(Math.abs(r.indexes[i]-r.indexes[i+1])<=k)return true;
           }
        }
    }
    return false;
};