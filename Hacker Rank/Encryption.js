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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function chunkString(str, size) {
  if (size <= 0) throw new Error("Size must be greater than 0");

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

function encryption(s) {
    if(/\s/.test(s)){
        let res = s.split(" ").join("");
        const arr = [...res];
        //console.log(arr);
        if(Math.trunc( Math.sqrt(res.length))*(Math.trunc( Math.sqrt(res.length))+1)>res.length){
           // console.log(Math.trunc( Math.sqrt(res.length)),Math.trunc( Math.sqrt(res.length))+1);
        }
    }else{
        let res = s.split(" ").join("");
        console.log("len",s.length);
        const arr = [...res];
        console.log(arr);
        let result='';
       if(Math.trunc( Math.sqrt(res.length))*Math.trunc( Math.sqrt(res.length))===res.length){
         let arr1=chunkString(arr,( Math.trunc( Math.sqrt(res.length))));
           for (let col = 0; col < arr1[0].length; col++) {
            let word = "";
               for (let row = 0; row < arr1.length; row++) {
                     if(arr1[row][col]!==undefined){
                        word += arr1[row][col];
                     }
                     
                }
                word=word+' ';
                result=result+word;
             } 
       }
       else if(Math.trunc( Math.sqrt(res.length))*(Math.trunc( Math.sqrt(res.length))+1)>=res.length){
           console.log(Math.trunc( Math.sqrt(res.length)),Math.trunc( Math.sqrt(res.length))+1);
           let arr1=chunkString(arr,( Math.trunc( Math.sqrt(res.length))+1));
           for (let col = 0; col < arr1[0].length; col++) {
            let word = "";
               for (let row = 0; row < arr1.length; row++) {
                     if(arr1[row][col]!==undefined){
                        word += arr1[row][col];
                     }
                     
                }
                word=word+' ';
                result=result+word;
             }        
        }else{
              let arr1=chunkString(arr,( Math.trunc( Math.sqrt(res.length))+1));
           for (let col = 0; col < arr1[0].length; col++) {
            let word = "";
               for (let row = 0; row < arr1.length; row++) {
                     if(arr1[row][col]!==undefined){
                        word += arr1[row][col];
                     }
                     
                }
                word=word+' ';
                result=result+word;
             }  
        }
        return result;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
