// 90	uppercase Z
// 122	lowercase z

function capitalize(s) {
    let lc = "";
    let uc = "";

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 90) {
            lc += s.charAt(i);
            uc += s.fromCharCode(s.charCodeAt(i) - 32);
        } else {
            uc += s.charAt(i);
            lc += s.fromCharCode(s.charCodeAt(i) + 32);
        }
    }

    return [uc, lc];
}
