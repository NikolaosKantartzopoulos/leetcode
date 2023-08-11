var canPlaceFlowers = function (flowerbed, n) {
  let extendedFlowerbed = [0].concat(flowerbed).concat([0]);

  let initialFlowerCount = flowerbed.filter((elem) => elem == 1).length;

  for (let i = 1; i < extendedFlowerbed.length - 1; i++) {
    if (extendedFlowerbed[i - 1] === 0 && extendedFlowerbed[i + 1] === 0) {
      extendedFlowerbed[i] = 1;
    }
  }

  flowerbed = extendedFlowerbed.slice(1, extendedFlowerbed.length - 1);
  let cnt = flowerbed.filter((elem) => elem == 1).length;

  return n <= cnt - initialFlowerCount;
};

canPlaceFlowers([1, 0, 0, 0, 1], 1);

module.exports = canPlaceFlowers;
