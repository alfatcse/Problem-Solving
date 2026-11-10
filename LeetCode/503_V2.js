/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let next = Array(nums.length).fill(-1);
    let cycle = 0;
    for (let i = 0; i < nums.length * 2; i++) {
        while (stack.length !== 0 && nums[i % nums.length] > nums[stack[stack.length - 1]]) {
            let index = stack.pop();
            next[index] = nums[i % nums.length];
        }
        if (i < nums.length)
            stack.push(i);
    }
    return next;
};
