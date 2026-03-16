/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const HashMapNums = new Map();

    for (let i = 0; i < nums.length; i++) {
        // 1. Calculate the missing piece we need
        let missingNumber = target - nums[i];

        // 2. Check if we've already seen that missing piece
        if (HashMapNums.has(missingNumber)) {
            // WE FOUND IT! Return the index of the missing number, and our current index
            return [HashMapNums.get(missingNumber), i];
        }

        // 3. If we haven't seen it, add the current number and its index to the map
        HashMapNums.set(nums[i], i);
    }
};