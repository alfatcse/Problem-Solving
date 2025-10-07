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
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

/*function surfaceArea(A) {
    let tb=(A.length*A[0].length)*2;
    console.log("tb",tb);
    console.log("len",A.length);
    if(A.length===1&&A[0].length===1){
        return 6;
    }
    else if(A.length===1||A[0].length===1){
    let f=0;
    let b=0;
    if(A.length===1){
         for(let i=0;i<A[0].length;i++){
        f=f+A[0][i];
    }
   
    for(let i=0;i<A[A.length-1].length;i++){
        b=b+A[A.length-1][i];
    }
    }
    if(A[0].length===1){
    for(let i=0;i<A.length;i++){
        b=b+A[i][0];
    }
    b=b*2;
    }
    let r=0 ,l=0;
    if(A.length===1){
        r=A[0][0];
        l=A[0][A[0].length-1];
    }
    if(A[0].length===1){
        r=A[0][0];
        l=A[A.length-1][0];
    }
    let v=0;
    if(A[0].length>=2){
        console.log("BoBo")
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[i].length;j++){
            if(j+1!==A[i].length&&i+1!==A[i].length){
               v=v+ Math.abs(A[i][j+1]-A[i][j]); //joy
            }
            console.log("vv:",v,"A[i][j]:",A[i][j]);
        }  
     }
    }
    let h=0;
    if(A.length>=2){
    console.log("koko")
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[i].length;j++){
            if(i+1!==A.length){
                console.log("mnh");
                h=h+ Math.abs(A[i][j]-A[i+1][j]); //joy1
            }
            console.log("hh:",h,"A[",i,"][",j,"]:",A[i][j]);
        }   
    }
    }
    console.log("tb:",tb,"f:",f,"b:",b,"r:",r,"l:",l,"vv:",v,"hh:",h);
    let p=tb+f+b+r+l+v+h;
    console.log(p);
    return p;
    }else{
    let f=0;
    for(let i=0;i<A[0].length;i++){
        f=f+A[0][i];
        //console.log("ff:",f);
    }
    let b=0;
    for(let i=0;i<A[A.length-1].length;i++){
        b=b+A[A.length-1][i];
        //console.log("bb:",b);
    }
    let r=0;
    for(let i=0;i<A.length;i++){
        r=r+A[i][0];
        //console.log("rr:",r,"A[i][0]:",A[i][0]);
    }
    let l=0;
    for(let i=0;i<A.length;i++){
        l=l+A[i][A.length-1];
        //console.log("rr:",l,"A[len][0]:",A[i][0]);
    }
    let v=0;
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[i].length;j++){
            if(j+1!==A[i].length){
               v=v+ Math.abs(A[i][j+1]-A[i][j]); //joy2
            }
            
           // console.log("vv:",v,"A[i][j]:",A[i][j]);
        }
        
    }
    let h=0;
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[i].length;j++){
            if((i+1)!==A[i].length){
               h=h+ Math.abs(A[i+1][j]-A[i][j]); //joy3
            }
            
           // console.log("hh:",h,"A[i][j]:",A[i][j]);
        }
        
    }
      
    console.log("tb:",tb,"f:",f,"b:",b,"r:",r,"l:",l,"vv:",v,"hh:",h);
    let p=tb+f+b+r+l+v+h;
    console.log(p)
    return p;
    }
    
}*/
function surfaceArea(A) {
    const H = A.length;
    const W = A[0].length;
    let area = 0;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            const h = A[i][j];
            if (h > 0) area += 2; // top + bottom for this stack
            console.log("area:",area);
            const up = (i - 1 >= 0) ? A[i - 1][j] : 0;
            console.log("up:",up,Math.max(h - up, 0));
            const down = (i + 1 < H) ? A[i + 1][j] : 0;
            console.log("down:",down,Math.max(h - down, 0));
            const left = (j - 1 >= 0) ? A[i][j - 1] : 0;
            console.log("left:",left,Math.max(h - left, 0));
            const right = (j + 1 < W) ? A[i][j + 1] : 0;
            console.log("right:",right,Math.max(h - right, 0));

            // add exposed side faces for each direction
            area += Math.max(h - up, 0);
            area += Math.max(h - down, 0);
            area += Math.max(h - left, 0);
            area += Math.max(h - right, 0);
        }
    }

    return area;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const H = parseInt(firstMultipleInput[0], 10);

    const W = parseInt(firstMultipleInput[1], 10);

    let A = Array(H);

    for (let i = 0; i < H; i++) {
        A[i] = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));
    }

    const result = surfaceArea(A);

    ws.write(result + '\n');

    ws.end();
}