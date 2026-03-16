'use strict';

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
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 *  for (let j=0;j<n;j++){
        for (let i=0;i<n;i++){
            if(arr[i]>arr[i+1]){
            let key1=arr[i+1];
            let key2=arr[i];
             arr[i]=key1;
             arr[i+1]=key2;
              
              let newarr=[];
               newarr=arr.map(item => item);
               newarr[i+1]=key2;
               newarr[i]=key2;
               console.log(...newarr);
               
         }
         
      }
      
    }
    console.log(...arr);
 */

function insertionSort2(n, arr) {
    // Write your code here
    for (let j=1;j<=n;j++){
        let a=j;
       
        for (let i=a-1;i<=a&&i>=0;i--){
            if(arr[a]<arr[i]){
                let key1=arr[a];
                arr[a]=arr[i];
                arr[i]=key1;
               // console.log("i=",i,"a=",a,"j=",j,"arr:",...arr);
                a--;
            }
             
         } 
         if(j<n){
             console.log(...arr);  
         }
        
      } 
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
