    class Node{
        constructor(value) {
            this.value=value;
            this.next = null;
        }
    }

    class Queue {
        constructor() {
            this.top=null;
            this.bottom=null;
            this.length=0;
        }

        peek(){
            if (this.top === null) {
                return null; // Handle empty queue case
            }
            return this.top.value;
        }

        enqueue(value){
            const newNode= new Node(value);
            if (this.length === 0) {
                this.top = this.bottom = newNode;
            }
            else{
                this.bottom.next=newNode;
                this.bottom = newNode;
            }this.length++;
        }

        printQueue(){
            const arr=[];
            let currentCode= this.top;
            while(currentCode !== null){
                arr.push(currentCode.value);
                currentCode = currentCode.next;
            }
            return arr;
        }

        dequeue(){
            if(this.length===0){
                console.log("Queue underflow");
                return;
            }
            if (this.length === 1) {
                this.bottom = null; // if the queue becomes empty, reset bottom
            }

            let popNode=this.top;
            this.top = this.top.next;
            this.length--;
            return popNode.value;
        }
    }

const myQueue = new Queue();
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.dequeue()
myQueue.enqueue(9);
console.log(myQueue.printQueue());