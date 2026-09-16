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
 * Complete the 'twoStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER maxSum
 *  2. INTEGER_ARRAY a
 *  3. INTEGER_ARRAY b
 */
function prefSum(arr) {
    let n = arr.length;
    let prefixSum = new Array(n);
    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++){
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
}
function twoStacks(maxSum, a, b) {
   let tempA=prefSum(a);
   let tempB=prefSum(b);
   //console.log("tempA:",tempA,"tempB:",tempB);
   let BestStep=0;
   let tempAH=0,flag=false;
   for(let i=0;i<tempA.length;i++){
    if(tempA[i]>maxSum){
        console.log(i);
        tempAH=i;
        flag=true;
        break;
    }
   }
   let BestStep1=0;
   for(let i=0;i<tempB.length;i++){
    //console.log("tempB[i]",tempB[i]);
    if(tempB[i]>maxSum){
        BestStep1=i;
        break;
    }
   }
   BestStep=tempAH;
   if(flag===false){
    BestStep=tempA.length;
    tempAH=tempA.length;
   }
   for(let j=tempAH-1,i=0;j>=0,i<tempB.length;j--,i++){
    while(tempA[j]+tempB[i]<=maxSum){
        if(tempA[j]+tempB[i]<=maxSum){
        //console.log("tempA[",j,"]",tempA[j],"tempB[",i,"]",tempB[i])
        BestStep=((i+1)+(j+1));
        //console.log("BestStepppp:",BestStep);
         i++;
      }
    }
      if(j===-1){
        break;
      }
       
   }
   let BestStep2=0;
   if(tempB[tempB.length-1]<=maxSum){
    BestStep2=tempB.length;
   }
   //console.log("BestStep1",BestStep1,"BestStep2",BestStep2,"len:",tempB.length,"tempB[tempB.length-1]",tempB[tempB.length-1]);
   //console.log("BestStep",BestStep,"BestStep1",BestStep1,"BestStep2",BestStep2);
   return Math.max(BestStep,BestStep1,BestStep2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const maxSum = parseInt(firstMultipleInput[2], 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

        const result = twoStacks(maxSum, a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
