'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(llist, data) {
    // Write your code here
    let llistNewNode = new DoublyLinkedList();
    let llistNewNode1 = llist;
    let llistNewNode2=llist;
    let l=false;
    let m=false;
    while(llist.next!==null){
      if(llist.data>data){
        llistNewNode.data=data;
        llistNewNode.next=llist;
        llistNewNode1=llistNewNode;
        l=true;
        break;
      }
      else if(llist.data<=data&&llist.next.data>=data){
        llistNewNode.data=data;
        llistNewNode.next=llist.next;
        llistNewNode.prev=llist;
        llist.next.prev=llistNewNode;
        llist.next=llistNewNode;
        m=true;
        break;
      }
      llist=llist.next;
    }
    if(l===false&&m===false){
      if(llist.data<data){
       console.log("last")
        llistNewNode.data=data;
        llist.next=llistNewNode;
      }
      return llistNewNode1;
     }
    /*while(llistNewNode1.next!==null){
      console.log(llistNewNode1.data);
      llistNewNode1=llistNewNode1.next;
    }
    console.log(llistNewNode1.data);*/
    if(l===true) return llistNewNode1;
    if(m===true) return llistNewNode2;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new DoublyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const data = parseInt(readLine(), 10);

        let llist1 = sortedInsert(llist.head, data);

        printDoublyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
