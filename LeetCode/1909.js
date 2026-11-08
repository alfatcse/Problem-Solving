/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStrict = (arr) => {
    for (let k = 1; k < arr.length; k++) {
        if (arr[k - 1] >= arr[k]) return false;
    }
    return true;
};
var canBeIncreasing = function (nums) {
    let a = [...nums].sort((a, b) => a - b);
    if (JSON.stringify(a) === JSON.stringify(nums)) {
        if (nums.every(v => v === nums[0]) && nums.length > 2) {
            return false;
        }
        else { return true; }
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= nums[i + 1]) {
                const copy1 = [...nums];
                const copy2 = [...nums];    
                copy1.splice(i, 1);
                copy2.splice(i + 1, 1);
                if (isStrict(copy1) || isStrict(copy2))
                    return true;
                else
                    return false;
            }
        }
    }
};