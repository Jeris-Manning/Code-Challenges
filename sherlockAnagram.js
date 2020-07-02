function sherlockAndAnagrams(s) {
    let alphabet = {};
    let charCount = 0;
    let permCount = 0;
    let factorials = [];
    let perm = 0;

    for (let i = 0; i < s.length; i++) {
        alphabet[s.charAt(i)] == undefined
            ? (alphabet[s.charAt(i)] = 1)
            : (alphabet[s.charAt(i)] = undefined);
        alphabet[s.charAt(i)] == undefined ? charCount++ : (charCount += 0);
    }

    for (let k = 1; k < charCount; k++) {
        perm = factorial(charCount) / factorial(charCount - k);
        permCount += perm;
    }

    permCount += factorial(charCount);

    return permCount;

    function factorial(num) {
        if (num == 1) {
            return 1;
        } else if (factorials[num] != undefined) {
            return factorials[num];
        } else {
            factorials[num] = num * factorial(num - 1);
            return factorials[num];
        }
    }
}
