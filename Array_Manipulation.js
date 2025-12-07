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
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    if(n>=10000000){
  
   const arr = new Array(n + 2).fill(0);
   for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0]; // Start index
    let b = queries[i][1]; // End index
    let k = queries[i][2]; // Value to add
    arr[a] += k;
    if ((b + 1) <= n) {
        arr[b + 1] -= k;
    }
    }
   let currentSum = 0;
   let maxx = 0;
   for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]; 
    if (currentSum > maxx) {
        maxx = currentSum;
    }
      }
    return maxx;
    }else{
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(0);
    }
    for(let i=0;i<queries.length;i++){
        for(let j=queries[i][0];j<=queries[i][1];j++){
            arr[j-1]=arr[j-1]+queries[i][2];
        }
    }
    //Math.max(...arr);
    return Math.max(...arr);
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n, queries);

    ws.write(result + '\n');

    ws.end();
}
