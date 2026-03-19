var Tree = function() {
    this.root = null;
}
Tree.prototype.insert = function(node, data) {
    if (node == null){
        node = new Node(data);
    }
     else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}
var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
function printLeft(node){
     if (node === null)
        return;
     while(node!==null){
        process.stdout.write(node.data.toString() + ' ');
        node=node.left;
     }   
}

function TopView(root){
    if(root===null){
        return;
    }
    const HashMapNums=new Map();
    const HDQueue=[{node:root,hd:0}];
    while(HDQueue.length>0){
        const current=HDQueue.shift();
        const CurrentNode=current.node;
        const CurrentHD=current.hd;
        if(!HashMapNums.has(CurrentHD)){
            HashMapNums.set(CurrentHD,CurrentNode.data);
        }
        if(CurrentNode.left!==null){
            HDQueue.push({ node: CurrentNode.left, hd: CurrentHD - 1 })
        }
         if(CurrentNode.right!==null){
            HDQueue.push({ node: CurrentNode.right, hd: CurrentHD + 1 })
        }
    }
    const sortedHDs = [...HashMapNums.keys()].sort((a, b) => a - b);
    const finalArray = sortedHDs.map(hd => HashMapNums.get(hd));
    console.log(finalArray.join(' '));
}
function processData(input) {
    const newInput=input.split("\n");
    const newInput1=newInput[1].split(" ");
    var tree = new Tree();
    for (var i=0; i<newInput1.length; i++) {
        tree.root = tree.insert(tree.root, Number(newInput1[i]));
    }
    TopView(tree.root);
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
