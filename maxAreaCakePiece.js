



// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
// User Accepted:4777
// User Tried:6232
// Total Accepted:4871
// Total Submissions:18740
// Difficulty:Medium
// Given a rectangular cake with height h and width w, and two arrays of integers horizontalCuts and verticalCuts where horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

// Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a huge number, return this modulo 10^9 + 7./**

// Constraints:

// 2 <= h, w <= 10^9
// 1 <= horizontalCuts.length < min(h, 10^5)
// 1 <= verticalCuts.length < min(w, 10^5)
// 1 <= horizontalCuts[i] < h
// 1 <= verticalCuts[i] < w
// It is guaranteed that all elements in horizontalCuts are distinct.
// It is guaranteed that all elements in verticalCuts are distinct.


//  * @param {number} h
//  * @param {number} w
//  * @param {number[]} horizontalCuts
//  * @param {number[]} verticalCuts
//  * @return {number}

var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  const modus = 1000000007;
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let maxH;
  let maxV;
  if (horizontalCuts.length == 1) {
      if (horizontalCuts[0] > h - horizontalCuts[0]) {
          maxH = horizontalCuts[0];
      } else {
          maxH = h - horizontalCuts[0];
      }
  } else {
      maxH = horizontalCuts[0];
      for (let h = 1; h < horizontalCuts.length; h++) {
          if (horizontalCuts[h] - horizontalCuts[h - 1] > maxH) {
              maxH = horizontalCuts[h] - horizontalCuts[h - 1];
          }
      }
      if (h - horizontalCuts[horizontalCuts.length - 1] > maxH) {
          maxH = h - horizontalCuts[horizontalCuts.length - 1];
      }
  }

  if (verticalCuts.length == 1) {
      if (verticalCuts[0] > w - verticalCuts[0]) {
          maxV = verticalCuts[0];
      } else {
          maxV = w - verticalCuts[0];
      }
  } else {
      maxV = verticalCuts[0];

      for (let v = 1; v < verticalCuts.length; v++) {

          if (verticalCuts[v] - verticalCuts[v - 1] > maxV) {
              maxV = verticalCuts[v] - verticalCuts[v - 1];
          }
      }
      if (w - verticalCuts[verticalCuts.length - 1] > maxV) {
          maxV = w - verticalCuts[verticalCuts.length - 1];
      }
  }
console.log(maxH, maxV)
  return ((maxH % modus) * (maxV % modus))%modus;
};