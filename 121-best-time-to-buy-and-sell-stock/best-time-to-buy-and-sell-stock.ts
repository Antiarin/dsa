function maxProfit(prices: number[]): number {
    let buy=prices[0];
    let profit=0;
    for (let i of prices.keys()){
        if(prices[i]<buy)buy=prices[i]
        else if(prices[i]-buy>profit)profit=prices[i]-buy
    }
    return profit
};