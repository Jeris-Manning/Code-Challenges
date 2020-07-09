var threeSum = function (nums) {
    let finalCombos = [];

    nums.sort((a, b) => a - b);

    for (let idxOne = 0; idxOne < nums.length; idxOne++) {
        let idxTwo = idxOne + 1;
        let idxThree = nums.length - 1;

        if (idxOne > 0 && nums[idxOne] === nums[idxOne - 1]) continue;

        while (idxTwo < idxThree) {
            let triSum = nums[idxOne] + nums[idxTwo] + nums[idxThree];

            if (triSum < 0) {
                idxTwo++;
            } else if (triSum > 0) {
                idxThree--;
            } else {
                finalCombos.push([nums[idxOne], nums[idxTwo], nums[idxThree]]);
                while (nums[idxTwo] === nums[idxTwo + 1]) idxTwo++;
                while (nums[idxThree] === nums[idxThree - 1]) idxThree--;
                idxTwo++;
                idxThree--;
            }
        }
    }

    return finalCombos;
};
