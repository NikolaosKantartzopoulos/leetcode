var boatsToSavePeople = function (people, limit) {
  people = people.sort((a, b) => a - b);
  let cnt = 0;

  let lp = 0;
  let rp = people.length - 1;

  while (lp <= rp) {
    const weight = people[lp] + people[rp];
    if (lp === rp || weight <= limit) {
      lp++;
      rp--;
    } else {
      rp--;
    }
    cnt++;
  }
  return cnt;
};

module.exports = boatsToSavePeople;
