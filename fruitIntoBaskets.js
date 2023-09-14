var fruitIntoBaskets = function (fruits) {
  const map = new Map();
  let l = 0;
  let max = 0;

  for (let r = 0; r < fruits.length; r++) {
    const rightFruit = fruits[r];

    map.set(rightFruit, map.get(rightFruit) + 1 || 0);

    while (map.size > 2) {
      const leftFruit = fruits[l];
      if (map.get(leftFruit) === 0) {
        map.delete(leftFruit);
      } else {
        map.set(leftFruit, map.get(leftFruit) - 1);
      }
      l++;
    }
    max = Math.max(max, r - l + 1);
  }
  return max;
};

module.exports = fruitIntoBaskets;
