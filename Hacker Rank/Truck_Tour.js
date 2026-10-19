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
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) {
    let totalPetrol=0;
    let candidate=0;
    for(let i=0;i<petrolpumps.length; ){
        totalPetrol=totalPetrol+petrolpumps[i][0];
        console.log("totalPetrol",totalPetrol);
        if(totalPetrol-petrolpumps[i][1]>=0){
            console.log("continue");
            totalPetrol=totalPetrol-petrolpumps[i][1];
            i++;
        }else {
           console.log("Not continue");
           totalPetrol=0;
           i=i+1;
           candidate=i;
        }
    }
    console.log("candidate",candidate);
    return candidate;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let petrolpumps = Array(n);

    for (let i = 0; i < n; i++) {
        petrolpumps[i] = readLine().replace(/\s+$/g, '').split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
    }

    const result = truckTour(petrolpumps);

    ws.write(result + '\n');

    ws.end();
}
