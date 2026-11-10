/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let next = Array(nums.length).fill(-1);
    let cycle = 0;
    for (let i = 0; i < nums.length; i++) {
        while (stack.length !== 0 && nums[i] > nums[stack[stack.length - 1]]) {
            let index = stack.pop();
            next[index] = nums[i];
        }
        stack.push(i);
        if (i === nums.length - 1 && cycle < ((nums.length / 2) - 1)) { i = -1; cycle += 1 };
    }
    return next;
};