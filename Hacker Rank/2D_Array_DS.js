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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    let sum1=[];
    let sum2=[];
    let sum3=[];
    let sum4=[];
    for(let j=0;j<4;j++){
        for(let i=0;i<4;i++){
        sum1.push(arr[j][i]+arr[j][i+1]+arr[j][i+2])
       }
       for(let i=1;i<5;i++){
        sum2.push(arr[j+1][i]);
       }
       for(let i=0;i<4;i++){
        sum3.push(arr[j+2][i]+arr[j+2][i+1]+arr[j+2][i+2]);
       }
    }
    for(let i=0;i<16;i++){
        sum4.push( sum1[i]+sum2[i]+sum3[i]);
    }
    return Math.max(...sum4);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
