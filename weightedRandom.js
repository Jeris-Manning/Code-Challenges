var Solution = function (w) {
  let weightSum = 0;
  let rollKey = {};

  for (let i = 0; i < w.length; i++) {
      if (w[i] > 0) {
          weightSum += w[i];
          rollKey[weightSum] = i;
      }
  }
  this.w = w;
  this.weightSum = weightSum;
  this.rollKey = rollKey;
};

/**
* @return {number}
*/

Solution.prototype.pickIndex = function () {
  let priorValue = 0;
  let roll = Math.floor(Math.random() * this.weightSum);

  for (let [key, value] of Object.entries(this.rollKey)) {
      if (roll < key) {
          priorValue = this.rollKey[key];
      } else {
          return priorValue;
      }
  }
  return priorValue;
};
