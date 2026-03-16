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
 * Complete the 'gameOfStones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER n as parameter.
 */
/* if(n<=6){
        if(n===1){
            return "Second";
        }else{
            return "First";
        }
    }else{
         for(;;){
            let f=0,g=0;
            if(n-5>=1||n-3>=1||n-2>=1){
             let a=n-5;
               if(a-2<2&&f===0){
                console.log("A::first",a);
                  n=n-5;
                  f=1;
                  console.log("5::first",n);
               }
                 let b=n-3;
               if(b-3<2&&f===0){
                  n=n-3;
                  f=1;
                  console.log("3::first",n);
               }
               let c=n-2;
               if(c-2<2&&f===0){
                  n=n-2;
                  f=1;
                  console.log("2::first",n);
               }
               if(f===0){
                n=n-2;
               }
            } 
            if(n-5>=1||n-3>=1||n-2>=1){
                 let a=n-5;
               if(a-2<2&&g===0){
                console.log("ASecond",a);
                  n=n-5;
                  g=1;
                  console.log("5::Second",n);
               }
               let b=n-3;
               if(b-3<2&&g===0){
                  n=n-3;
                  g=1;
                  console.log("3::Second",n);
               }
               let c=n-2;
               if(c-2<2&&g===0){
                  n=n-2;
                  g=1;
                  console.log("2::Second",n);
               }
            }
            if((n<=1||n===2)){
                console.log("First","g:",g,"f:",f,"n:",n);
                break;}
            else  if((n<=1||n===2)&&g===1){
                console.log("Second");
                break;}
      }
    }*/
function gameOfStones(n) {
  
        if (n % 7 === 0 || n % 7 === 1) {
        return "Second";
    } else {
        return "First";
    }   
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = gameOfStones(n);

        ws.write(result + '\n');
    }

    ws.end();
}
