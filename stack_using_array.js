class Stack{
    constructor() {
        this.arr=[];
        this.top=null;
        this.bottom=null;
    }

    peek(){
        if(this.arr.length===0){
            return null;
        }
        return this.top;
    }
    push(value){
        this.arr.push(value);
        this.top=this.arr[this.arr.length-1];
        if (this.arr.length === 1) {
            this.bottom = this.arr[0];  // If it's the first element, it's also the bottom
        }
    }

    printlist(){
        console.log(this.arr);
    }

    pop(){
        if(this.arr.length===0){
            console.log("underflow");
            return;
        }
        let value=this.arr.pop();
        this.top = this.arr.length > 0 ? this.arr[this.arr.length - 1] : null;  // Update top
        this.bottom = this.arr.length > 0 ? this.arr[0] : null;  // Update bottom

        return value;
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(7);
myStack.push(8);
myStack.printlist();
myStack.pop();
myStack.pop();
myStack.pop();