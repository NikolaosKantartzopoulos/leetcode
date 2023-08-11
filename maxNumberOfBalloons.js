var maxNumberOfBalloons = function (text) {
  let hash = new Map();

  for (let letter of "balon") {
    hash.set(letter, 0);
  }

  for (let i = 0; i < text.length; i++) {
    let cur = text[i];
    hash.set(cur, hash.get(cur) + 1);
  }

  let max = text.length;

  for (let [key, value] of hash) {
    let temp;
    if (/[lo]/.test(key)) temp = Math.floor(value / 2);
    else if (/[ban]/.test(key)) temp = value;
    if (temp < max) max = temp;
  }
  return max;
};

maxNumberOfBalloons("loonbalxballpoon");
module.exports = maxNumberOfBalloons;
