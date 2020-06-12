// Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. The fractions can be in any order.

// Example 1:

// Input: n = 2
// Output: ["1/2"]
// Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.
// Example 2:

// Input: n = 3
// Output: ["1/2","1/3","2/3"]
// Example 3:

// Input: n = 4
// Output: ["1/2","1/3","1/4","2/3","3/4"]
// Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".

// Constraints:

// 1 <= n <= 100

//  * @param {number} n
//  * @return {string[]}

var simplifiedFractions = function (n) {
    let fracts = [];
    let reduced = true;

    for (let i = n; i > 1; i--) {
        for (let j = i - 1; j > 0; j--) {
            if (i % j !== 0 || j == 1) {
                reduced = true;
                for (let f = 2; f <= j; f++) {
                    if (i % f == 0 && j % f == 0) {
                        reduced = false;
                    }
                }
                if (reduced == true) {
                    fracts.push(`${j}/${i}`);
                }
            }
        }
    }
    return fracts;
};
// n is the denominator
// will have denominators from n --> 2 descending
// check every fraction where n-1 ---> 1 / n  for every n
// if denom % numerator == 0, then it is not a valid fraction
