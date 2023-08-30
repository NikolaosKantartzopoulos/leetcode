var carFleet = function (target, position, speed) {
  let cars = [];

  position.forEach((carPosition, idx) => (cars[idx] = [carPosition]));
  speed.forEach((carSpeed, idx) => cars[idx].push(carSpeed));

  let toFinishLine = cars
    .sort((a, b) => a[0] - b[0])
    .map((car, i) => (target - car[0]) / car[1]);

  for (let i = toFinishLine.length - 1; i > 0; i--) {
    if (toFinishLine[i] >= toFinishLine[i - 1]) {
      toFinishLine.splice(i - 1, 1);
    }
  }

  return toFinishLine.length;
};

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);

module.exports = carFleet;
