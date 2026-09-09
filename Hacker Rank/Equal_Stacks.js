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
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */
function add(array){
    let total=0;
    for(let i=0;i<array.length;i++){
        total=total+array[i]
    }
    return total;
}

function equalStacks(h1, h2, h3) {
    // Write your code here
    let a=add(h1);
    let b=add(h2);
    let c=add(h3);
    if(a===b&&b===c&&c===a){
        return a;
    }
    while(a!==b||b!==c||c!==a){
        var max = Math.max(a, b, c);
        if(max===a){
            a=a-h1[0];
            h1.shift();
        }else if(max==b){
             b=b-h2[0];
            h2.shift();
        }
        else if(max===c){
            console.log("h3");
             c=c-h3[0];
            h3.shift();
        }
        
    }
    if(a===b&&b===c&&c===a){
        return a
    }
    return 0;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
