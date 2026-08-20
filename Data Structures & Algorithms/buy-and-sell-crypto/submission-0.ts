class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let highestProfit = 0;
        let left = 0;
        for (let i = 0; i < prices.length; i++) {
            const curr = prices[i]!;
            const buyDayPrice = prices[left]!;

            let profit = curr - buyDayPrice;

            if (profit <= highestProfit && curr < buyDayPrice) {
                left = i;
                continue;
            }

            if (profit > highestProfit) {
                highestProfit = profit;
            } else {
                continue;
            }
        }
        return highestProfit;
    }
}
