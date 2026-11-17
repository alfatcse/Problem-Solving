/**
 * @param {number} n
 * @return {number}
 */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var fib = function (n) {
    return fibonacci(n);
};