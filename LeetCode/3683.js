/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let min = Infinity;
    for (let task of tasks) {
        if (task[0] + task[1] < min) min = task[1] + task[0];
    }
    return min;
};