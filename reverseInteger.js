// Given a 32-bit signed integer, reverse digits of an integer.
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// param {number} x
// return {number}

var reverse = function (x) {
    let neg = false;

    if (x < 0) {
        neg = true;
    }

    let result = Math.abs(x).toString(10).split("").reverse().join("");

    if (neg == true) {
        result = "-" + result;
    }

    result = Number(result);

    if (Math.pow(-2, 31) > result || Math.pow(2, 31) - 2 < result) {
        return 0;
    }

    return result;
};
