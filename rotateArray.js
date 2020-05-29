var rotate = function (nums, k) {
    if (k >= nums.length) {
        k = k % nums.length;
    }

    if (k == 0) {
        return;
    }

    for (let i = 0; i < k; i++) {
        nums.splice(0, 0, nums.pop());
    }
};

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// It's guaranteed that nums[i] fits in a 32 bit-signed integer.
// k >= 0

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


// @param {number[]} nums
// @param {number} k
// @return {void} Do not return anything, modify nums in-place instead.
