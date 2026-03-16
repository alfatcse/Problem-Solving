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
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    // Write your code here
    let i=0,odd=0;
    while (i<B.length){
        if(B[i]%2!=0){
            odd++;
        }
        i++;
    }
    if(odd%2!=0){
        return "NO";
    }else if(odd===0){
        return 0;
    }else{
        let i=0,odd1=0,c=0,j=0;
        while (i<B.length){
        if(B[i]%2!=0){
            B[i]=B[i]+1;
            B[i+1]=B[i+1]+1;
            /*if(B[i-1]%2!=0&&B[i+1]%2===0){
                B[i-1]=B[i-1]+1;
            }else if(B[i+1]%2!=0&&B[i-1]%2===0){
                B[i+1]=B[i+1]+1;
            }else{
                B[i+1]=B[i+1]+1;
            }*/
        c=c+2;
        }
        i++;  
     }
      return c;
    }
}
/*function fairRations(B) {
    let i = 0, odd = 0;

    // Count total odds
    while (i < B.length) {
        if (B[i] % 2 !== 0) {
            odd++;
        }
        i++;
    }

    // Impossible case
    if (odd % 2 !== 0) {
        return "NO";
    }

    // If already all even
    if (odd === 0) {
        return 0;
    }

    // Now distribute
    let c = 0;
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;        // give 1 to current
            B[i + 1]++;    // and 1 to next
            c += 2;        // count loaves
        }
    }

    return c;
}*/


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const N = parseInt(readLine().trim(), 10);

    const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

    const result = fairRations(B);

    ws.write(result + '\n');

    ws.end();
}
