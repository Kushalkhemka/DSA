class Node{
    constructor(value) {
        this.value=value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    peek(){
        console.log(this.top.value);
    }

    printStack(){
        const arr=[];
        let currentCode= this.top;
        while(currentCode !== null){
            arr.push(currentCode.value);
            currentCode = currentCode.next;
        }
        return arr;
    }

    push(value){
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = this.bottom = newNode
        }else{
            let prev=this.top;
            this.top=newNode;
            this.top.next=prev;
        }this.length++;
    }
    pop(){
        if(!this.top){
            console.log("Stack underflow");
            return;
        }
        this.top=this.top.next;
        this.length--;
        if (this.length === 0) {
            this.bottom = null;
        }
    }
}
//
// const myStack=new Stack();
// myStack.push(5);
// myStack.push(7);
// myStack.push(8);
// console.log(myStack.printStack());
// myStack.peek();

const myStack = new Stack();
myStack.push(5);
myStack.push(7);
myStack.push(8);
console.log(myStack.printStack()); // [8, 7, 5]
myStack.pop();
console.log(myStack.printStack()); // [7, 5]
myStack.pop();
myStack.pop();
myStack.pop();
