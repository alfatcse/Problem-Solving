/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ans = Array(nums1.length).fill(-1);
    let stack = [];
    const m = new Map();
    nums2.forEach((value, index) => m.set(value, index));
    for (let j = 0; j < nums1.length; j++) {
        let index = m.get(nums1[j]);
        stack = [];
        let flag = 0;
        for (let i = index; i < nums2.length; i++) {
            stack.push(i)
            while (stack.length !== 0 && nums1[j] < nums2[stack[stack.length - 1]]) {
                let index1 = stack.pop();
                ans[j] = nums2[index1];

                flag = 1;
                break;
            }
            if (flag === 1) {
                break;
            }
        }
    }
    return ans;
};