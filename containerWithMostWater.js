var containerWithMostWater = function (height) {
  let lp = 0;
  let rp = height.length - 1;

  function calcVolume(lp, rp) {
    return Math.min(height[lp], height[rp]) * (rp - lp);
  }

  let max = 0;

  while (lp < rp) {
    if (calcVolume(lp, rp) > max) {
      max = calcVolume(lp, rp);
    }
    if (height[lp] < height[rp]) lp++;
    else rp--;
  }

  return max;
};
module.exports = containerWithMostWater;
