let a = [2, 1, 5, 6, 2, 3];
let result = Array(a.length).fill(-1);
let stack = [];
for (let i = 0; i < a.length; i++) {
  while (stack.length !== 0 && a[stack.length - 1] < a[i]) {
    stack.pop();
    result[i - 1] = a[i];
    console.log(stack);
  }
  stack.push(i);

  console.log(stack);
}
console.log(result);
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
