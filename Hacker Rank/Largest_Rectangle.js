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
    let rectangle=0;
    for(let i=0;i<h.length;i++){
     let left=0;
     let right=1;
       for(let j=i+1;j<h.length;j++){
        if(h[j]>=h[i]){
            right++;
        }
        if(h[j]<h[i]){
            break;
        }
       }
      for(let p=i-1;p>=0;p--){
        if(h[p]>=h[i]){
             left++;
         }
         if(h[p]<h[i]){
            break;
        }
       }
       if(rectangle<(h[i]*(right+left))){
        rectangle=h[i]*(right+left);
       }
       right=0;
       left=0;
       }    
    return rectangle;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const result = largestRectangle(h);

    ws.write(result + '\n');

    ws.end();
}
