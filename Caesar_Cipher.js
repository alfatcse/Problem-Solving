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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
     //console.log(s,k);
     let rev=[];
     let j=k%26;
     k=j;
     for(let i=0;i<s.length;i++){
        let code=s[i].charCodeAt(0);
        if((code >= 65 && code <= 90)){
           // console.log("a:",s[i],"code:",code);
            if(code+k>90){
                let b=String.fromCharCode(code+k-26);
                //console.log("b:",b,"code::",code+2-26);
                rev.push(b);
            }else{
                let b=String.fromCharCode(code+k);
               // console.log("b:",b,"code::",code+2);
                rev.push(b); 
            } 
        }else if((code >= 97 && code <= 122)){
             if(code+k>122){
                let b=String.fromCharCode(code+k-26);
                //console.log("b:",b,"code::",code+2);
                rev.push(b);
            }else{
                let b=String.fromCharCode(code+k);
                //console.log("b:",b,"code::",code+2);
                rev.push(b); 
            } 
        }
        else{
            rev.push(s[i]);
        }
     }
    // console.log(rev.join(''));
     return rev.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}