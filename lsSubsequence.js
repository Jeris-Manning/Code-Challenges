// Given a string s and a string t, check if s is subsequence of t.

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).


// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 10^4
// Both strings consists only of lowercase characters.


var isSubsequence = function (s, t) {
    if (s.length < 1) {
        return true;
    }
    let needle = s.split("");
    let hay = t.split("");
    let i = 0;

    for (let j = 0; j < hay.length; j++) {
        if (hay[j] == needle[i]) {
            i++;

            if (i == needle.length) {
                return true;
            }
        }
    }

    return false;
};
