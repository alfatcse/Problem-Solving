/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let result = [...prices];
    let stack = [];
    for (let i = 0; i < prices.length; i++) {
        while (stack.length !== 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = prices[index] - prices[i];
        }
        stack.push(i)
    }
    return result;
};
