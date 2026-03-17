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
function collectPaths(node, path, paths,key) {
    if (node === null)
        return;
    path.push(node.data);
    if (node.data===key) {
        paths.push([...path]);
    }
    else {
        collectPaths(node.left, path, paths,key);
        collectPaths(node.right, path, paths,key);
    }
    path.pop();
}
function LowestCommonAncestor(tree,input1){
    const paths = [];
    const path = [];
    collectPaths(tree.root, path, paths,Number(input1[0]));
    const paths1 = [];
    const path1 = [];
    collectPaths(tree.root, path1, paths1,Number(input1[1]));
    const commonItems = paths[0].filter(item => paths1[0].includes(item));
    console.log(commonItems[commonItems.length-1]); 
    return commonItems[commonItems.length-1];
}

function processData(input) {
    //Enter your code here
    const newInput=input.split("\n");
    const newInput1=newInput[1].split(" ");
    var tree = new Tree();
    for (var i=0; i<newInput1.length; i++) {
        tree.root = tree.insert(tree.root, Number(newInput1[i]));
    }
    const input1=newInput[2].split(" ");
    LowestCommonAncestor(tree,input1);
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
