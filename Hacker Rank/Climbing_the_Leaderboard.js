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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */
/*function remEt(a, ele) {
    a.forEach((item, index) => {
        if (item === ele) {
            a.splice(index, 1);
        }
    });
    return a;
}
function findRank(ranked,player1){
     let rank1=[];
     rank1.push(1);
     for(let i=1;i<ranked.length;i++){
        if(ranked[i]===ranked[i-1])
          {
            let j=rank1.pop();
            rank1.push(j);
            rank1.push(j);
          }else if(ranked[i]<ranked[i-1]){
             let j=rank1.pop();
             rank1.push(j);
             rank1.push(j+1);
          }
     }
     for(let j=0;j<ranked.length;j++){
        if(player1===ranked[j]){
            return rank1[j];
        }
     }
}*/
/*function climbingLeaderboard(ranked, player) {
     let answer=[];
     for(let i=0;i<player.length;i++){
        let rank=ranked;
        rank.push(player[i]);
        rank.sort(function(a, b){return b - a});
        answer.push(findRank(rank,player[i]));
        remEt(rank,player[i]);
     }
     console.log("ans:",answer);
     return answer;
}*/

function climbingLeaderboard(ranked, player) {
    // Step 1: unique scores in descending order
    let uniqueRanked = [...new Set(ranked)];
    console.log(uniqueRanked);
    // Step 2: For each player, binary search to find rank
    let result = [];
    for (let p of player) {
        let rank = getRank(uniqueRanked, p);
        result.push(rank);
    }
    return result;
}

function getRank(uniqueRanked, score) {
    let low = 0, high = uniqueRanked.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (uniqueRanked[mid] === score) {
            return mid + 1;
        } else if (uniqueRanked[mid] < score) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low + 1;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
