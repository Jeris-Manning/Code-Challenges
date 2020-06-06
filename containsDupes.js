var containsDuplicate = function (nums) {
    if (nums == []) {
        return false;
    }
    const numSet = new Set();
    numSet.add(nums);
    if (nums.length == numSet.length) {
        return false;
    }
    return true;
};
