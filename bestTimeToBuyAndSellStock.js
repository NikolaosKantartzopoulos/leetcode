var bestTimeToBuyAndSellStock = function (prices) {
  let maxProfit = 0;

  let l = 0;
  let r = 1;

  while (r < prices.length) {
    if (prices[r] < prices[l]) l = r;

    let difference = prices[r] - prices[l];

    if (difference > maxProfit) maxProfit = difference;

    r++;
  }

  return maxProfit;
};

module.exports = bestTimeToBuyAndSellStock;
