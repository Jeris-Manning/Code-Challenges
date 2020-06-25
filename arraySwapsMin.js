// You are given an unordered array consisting of non-consecutive integers  [3, 1, 2, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

// For example, given the array  we perform the following steps:

// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]

function minimumSwaps(arr) {
    let temp;
    let swap = 0;
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] != i + 1) {
            temp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = temp;
            swap++;
        }
    }

    return swap;
}
