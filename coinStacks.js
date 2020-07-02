/**
 * @param {number} n
 * @return {number}
 */

// sum of n = (n * n+1)/2

var arrangeCoins = function (n) {

  return Math.floor((Math.sqrt(1 - 4 * (-2 * n)) - 1) / 2);

};

//


//  Sum of first n natural numbers is (n * (n + 1)) / 2
//  We know sum, so we solve for n
//  sum * 2 = n * (n+1)
//  sum * 2 = n^2 + n
//  n^2 + n - (2 * sum) = 0
//  find positive solution for n with quadratic equation and round down to find number of completed stacks

//


// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.