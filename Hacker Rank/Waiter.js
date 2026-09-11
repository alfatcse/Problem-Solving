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
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */

function waiter(number, q) {
    var primes=[2];
    for (var i=2;primes.length<q;i++){
        var prime=true;
        var rootI=Math.sqrt(i)+1;
        for (var j=2;j<rootI;j++){
            if (i%j==0) {prime=false;break;}
        };
        if (prime) primes.push(i);
    }
    //console.log("prime",primes);
    let answer=[];
    let a1=number;
   for(let i=0;i<q;i++){
        let p=primes[i];
        let tempa1=[];
        let len=a1.length;
        let answerTemp=[];
        for(let j=0;j<len;j++){
            let temp=a1.pop();
            if(temp%p===0){
                answerTemp.push(temp);
            }else{
                tempa1.push(temp);
            }
        }
        a1=[];
        a1=tempa1;
        let len1=answerTemp.length;
        for(let j=0;j<len1;j++){
            let t=answerTemp.pop();
            answer.push(t);
        }
        //console.log("a1",a1,"->","answer",answer);
    }
    if(a1.length!==0){
        let len=a1.length;
        for(let i=0;i<len;i++){
         let temp=a1.pop();
         answer.push(temp);
    } 
    }
    //console.log(answer)
    return answer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    const number = readLine().replace(/\s+$/g, '').split(' ').map(numberTemp => parseInt(numberTemp, 10));

    const result = waiter(number, q);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
