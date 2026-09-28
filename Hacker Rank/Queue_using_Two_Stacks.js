class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;  
        this.rear = null; 
        this.size = 0; 
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null; 
        }
        const removedNode = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return removedNode.data;
    }
  
    isEmpty() {
        return this.size === 0;
    }
     printTop() {
        let current = this.front;
        console.log(current.data);
        /*const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements[0]);*/
    }
}

function processData(input) {
    let ArrayInput=input.split(/\r\n|\r|\n/);
    const queue = new Queue();
    for(let i=1;i<ArrayInput.length;i++){
        let tempArray=ArrayInput[i].split(' ');
        if(tempArray.length===2){
            queue.enqueue(tempArray[1]);
        }else if(tempArray.length===1){
             if(tempArray[0]==='2'){
                queue.dequeue();
            }else if(tempArray[0]==='3'){
                queue.printTop();
            }
        }
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
