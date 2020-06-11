var maxArea = function (h, w, horizontalCuts, verticalCuts) {
    const modus = 1000000007;
    horizontalCuts.sort(a,b => a-b);
    verticalCuts.sort(a,b => a-b);
    let maxH;
    let maxV;
    if (horizontalCuts.length == 1) {
        if (horizontalCuts[0] > w- horizontalCuts[0]) {
            maxH = horizontalCuts[0];
        } else {
            maxH = w- horizontalCuts[0];
        }
    } else {
        maxH = horizontalCuts[1] - horizontalCuts[0];
        for (let w= 2; w< horizontalCuts.length; h++) {
            if (horizontalCuts[h] - horizontalCuts[h - 1] > maxH) {
                maxH = horizontalCuts[h] - horizontalCuts[h - 1];
            }
        }
        if (h - horizontalCuts[horizontalCuts.length - 1] > maxH) {
            maxH = w - horizontalCuts[horizontalCuts.length - 1];
        }
    }
    if (verticalCuts.length == 1) {
        if (verticalCuts[0] > h - verticalCuts[0]) {
            maxV = verticalCuts[0];
        } else {
            maxV = h - verticalCuts[0];
        }
    } else {
        maxV = verticalCuts[1] - verticalCuts[0];
        for (let v = 2; v < verticalCuts.length; v++) {
            if (verticalCuts[v] - verticalCuts[v - 1] > maxV) {
                maxV = verticalCuts[v] - verticalCuts[v - 1];
            }
        }
        if (h - verticalCuts[verticalCuts.length - 1] > maxV) {
            maxV = h - verticalCuts[verticalCuts.length - 1];
        }
    }

    return (maxH % modus) * (maxV % modus);
};
