// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5

// Constraints:

// 1 <= s.length <= 500
// s contains only lowercase English letters.

var maxPower = function (s) {
    let currentRun = 1;
    let longestRun = 1;
    let str = s.split("");

    for (let i = 1; i < str.length; i++) {
        if (str[i] == str[i - 1]) {
            currentRun++;
        } else if (currentRun > longestRun) {
            longestRun = currentRun;
            currentRun = 1;
        } else {
            currentRun = 1;
        }
    }
    if (currentRun > longestRun) {
        longestRun = currentRun;
    }
    return longestRun;
};
// variable for current run
// variable for longest run
// split string to array
//Set counter to uptick as we move through string and current index == last index;
//Each new character, compare length of last run to longest run and update if increase.
//be sure to check current run length at end of string and compare
//return longest run value
