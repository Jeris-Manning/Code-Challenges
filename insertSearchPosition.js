// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var searchInsert = function (nums, target) {
    if (target == 0) {
        return 0;
    }
    let i = parseInt(nums.length / 2);

    while (target != nums[i]) {
        console.log(i);
        if (target > nums[i]) {
            i = parseInt((nums.length + i) / 2);
        } else {
            i = Math.ceil((nums.length - i) / 2);
        }
    }

    return i;
};
