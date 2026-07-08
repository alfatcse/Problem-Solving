function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function insert(root, data) {
    if (root === null) {
        return new Node(data);
    }
    if (data <= root.data) {
        root.left = insert(root.left, data);
    } else {
        root.right = insert(root.right, data);
    }
    return root;
}

function inOrder(root, out) {
    if (root === null) return;
    inOrder(root.left, out);
    out.push(root.data);
    inOrder(root.right, out);
}

function processData(input) {
    const tokens = input.split(/\s+/).filter(Boolean).map(Number);
    const values = tokens.slice(1);
   const count = (values) => {
    const map = new Map();
    for (const char of values) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
   }
  const ab= count(values);
   const bd=[...ab];
    const hasDuplicate = bd.some((c) => c[1] >= 2);

    if (hasDuplicate) {
        console.log("No");
        return;
    }
   const values1= [...values].sort(function(a, b){return a - b}); 
   if(values.join(' ')!==values1.join(' ')){
    console.log("No");
      return;
   }
    let root = null;
    for (let i = 0; i < values.length; i++) {
        root = insert(root, values[i]);
    }

    const result = [];
    inOrder(root, result);
   // console.log(result.join(' '));
    if(result.join(' ')===values.join(' ')){
        console.log ("Yes");
    }
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