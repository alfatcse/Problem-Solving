/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
   const HashMapNums = new Map();
   HashMapNums.set('I',1);
   HashMapNums.set('V',5);
   HashMapNums.set('X',10);
   HashMapNums.set('L',50);
   HashMapNums.set('C',100);
   HashMapNums.set('D',500);
   HashMapNums.set('M',1000);
   let Number1=0;
   for(let i=0;i<s.length;i++){
     let current=HashMapNums.get(s[i]);
     let next=HashMapNums.get(s[i+1]);
     if(next>current){
        Number1=Number1-current;
     }else{
        Number1=Number1+current;
     }
   }
   console.log(Number1);
   return Number1;
};
  