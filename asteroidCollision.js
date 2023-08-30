var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let pushAsteroid = true;
    let curAsteroid = asteroids[i];

    if (curAsteroid < 0 && stack[stack.length - 1] > 0) {
      while (stack.length !== 0 && stack[stack.length - 1] > 0) {
        if (Math.abs(curAsteroid) > Math.abs(stack[stack.length - 1])) {
          stack.pop();
        } else if (
          Math.abs(curAsteroid) === Math.abs(stack[stack.length - 1])
        ) {
          stack.pop();
          pushAsteroid = false;
        } else {
          pushAsteroid = false;
        }
        if (!pushAsteroid) break;
      }
    }
    if (pushAsteroid) stack.push(curAsteroid);
  }
  return stack;
};

module.exports = asteroidCollision;
