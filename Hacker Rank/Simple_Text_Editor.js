function processData(input) {
    let ArrayInput=input.split(/\r\n|\r|\n/);
    let currentString="";
    let undoString=[];
    for(let i=1;i<ArrayInput.length;i++){
        let ops=ArrayInput[i].split(" ");
        if(parseInt(ops[0])===1)
        {
           currentString= currentString.concat(ops[1]);
          // console.log("append::",currentString);
           undoString.push({step:i,liveString:currentString});
        }
        else if(parseInt(ops[0])===2)
        {
            if(currentString!==""){
                currentString = currentString.slice(0,currentString.length-parseInt(ops[1]))+currentString.slice(currentString.length+1)
            }
           // console.log(currentString);
            undoString.push({step:i,liveString:currentString});
        }
        else if(parseInt(ops[0])===3)
        {
            console.log(currentString.charAt(parseInt(ops[1])-1));
        }
        else if(parseInt(ops[0])===4){
            //console.log("undo");
            if(undoString.length>0){
                 undoString.pop()
                 if(undoString.length===0){
                     currentString="";
                 }else{
                    currentString=undoString[undoString.length-1].liveString;
                 }
           
            }
           
        }
       
    }
     //console.log(undoString);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
