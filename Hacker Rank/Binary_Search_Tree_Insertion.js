class Node {
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function insert(root,data){
    if(root === null){
        return new Node(data);
    } 
     
    if(data < root.data){
        root.left = insert(root.left, data);
    } else {
        root.right = insert(root.right, data);
    }
    
    return root;
}

function constructTree(root,arr){
    if(root.data === null){
        return null;
    }
    arr.push(root.data);
    if(root.left!=null){
        constructTree(root.left,arr);
    }
    if(root.right!=null){
        constructTree(root.right,arr);
    }
    
    return arr;
}


let root = null;

function processData(input) {
    //Enter your code here
    const data = input.split("\n");
    const treeData = data[1].split(" ");
  
    for(let i=0; i<treeData.length; i++){
       root = insert(root,parseInt(treeData[i]));
    }
    
   console.log(constructTree(root,[]).join(" "));
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
