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
 * Complete the 'poisonousPlants' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY p as parameter.
 */
/*function countDays(plant){
    let removeIndex=[];
    let flag=false;
    for(let i=0;i<plant.length;i++){
        if(plant[i]<plant[i+1]){
            //console.log("i:",i,"i+1",i+1,"plant[i]",plant[i],"plant[i+1]",plant[i+1]);
            removeIndex.push(i+1);
        }
    }
    console.log("removeIndex",removeIndex);
    if(removeIndex.length===0){
        flag=true;
        return flag;
    }
    for(let j=0;j<removeIndex.length;j++){
        //console.log("plant::",plant,"j",removeIndex[j]);
        plant.push(plant[removeIndex[j]]); 
        plant.splice(removeIndex[j], 1);
         //console.log("plant::",plant); 
    }
    for(let j=0;j<removeIndex.length;j++){
        plant.pop();     
    }
    return flag;  
}*/
function poisonousPlants(p) {
    let stack = [];      // holds pairs (value, day)
    let answer = 0
    for(let i=0;i<p.length;i++){
       let  worstDelay = 0;
       while(stack.length!==0&&stack[stack.length-1].value>=p[i]){
            let popped=stack.pop();
            worstDelay=Math.max(worstDelay,popped.day);       
       }
       let day=0;
       if(stack.length===0){
           day=0
       }else{
           day = worstDelay + 1
       }
       stack.push({value:p[i],day:day});
       answer=Math.max(answer,day);
      
    }
   
    return answer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = readLine().replace(/\s+$/g, '').split(' ').map(pTemp => parseInt(pTemp, 10));

    const result = poisonousPlants(p);

    ws.write(result + '\n');

    ws.end();
}
