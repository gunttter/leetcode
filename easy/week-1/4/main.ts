export function maxProfit(prices: number[]): number {
  let sells = Number.MAX_VALUE;
  let max = 0;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < sells) {
      sells = prices[i];
    }

    max = prices[i] - sells;
    if (profit < max) {
      profit = max;
    }
  }
  return profit;
}
