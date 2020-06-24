// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99

var singleNumber = function (nums) {
    let arrSum = nums.reduce(function (a, b) {
        return a + b;
    }, 0);

    let arrSet = new Set(nums);
    let setSum =
        3 *
        [...arrSet].reduce(function (a, b) {
            return a + b;
        }, 0);

    return (setSum - arrSum) * 0.5;
};
