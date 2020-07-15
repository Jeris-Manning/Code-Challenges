/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  let mAngle = minutes * 6;
  let hRaw = hour * 30;
  let hMod = minutes / 2;

  let angle = mAngle - (hRaw + hMod);

  angle = Math.abs(angle);

  return angle <= 180 ? angle : 360 - angle;
};

