/**
 * @param {string[]} words
 * @return {number}
 */
const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
               "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
               "..-","...-",".--","-..-","-.--","--.."];

function toMorse(word) {
    let code = "";
    for (const ch of word) {
        code += MORSE[ch.charCodeAt(0) - 97]; // 'a' → 0, 'b' → 1, ...
    }
    return code;
}

var uniqueMorseRepresentations = function(words) {
    let fullCode=[];
    for(let word of words){
        fullCode.push(toMorse(word));
    }
    let s=new Set(fullCode);
    return s.size
    
};