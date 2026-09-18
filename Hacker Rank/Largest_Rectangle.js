'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});
function readLine() {
    return inputString[currentLine++];
}
/*
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */

function largestRectangle(h) {
    const n = h.length;
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= n; i++) {
        const currentHeight = i === n ? 0 : h[i];

        while (stack.length > 0 && h[stack[stack.length - 1]] >= currentHeight) {
            const height = h[stack.pop()];
            const left = stack.length > 0 ? stack[stack.length - 1] : -1;
            const width = i - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const result = largestRectangle(h);

    ws.write(result + '\n');

    ws.end();
}
