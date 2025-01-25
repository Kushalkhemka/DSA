// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {

        const newNode ={
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next: this.head
        }
        this.head =newNode;
        this.length++;
        return this;
    }

    printList(){
        const arr=[];
        let currentCode= this.head;
        while(currentCode !== null){
            arr.push(currentCode.value);
            currentCode = currentCode.next;
        }
        return arr;
    }

    insert(index,value){
        if(index===0){
            this.prepend(value);
            return;
        }

        if(index>=this.length){
            this.append(value);
            return;
        }
        let prevNode=this.head;
        for(let i=0;i<index-1;i++){ //2
            prevNode=prevNode.next;
        }
        prevNode.next={
            value: value,
            next: prevNode.next
        };
    }

    remove(index){
        let currentNode= this.head;
        let prevNode;let value;
        for(let i=1;i<=index;i++){ //2
            currentNode=currentNode.next;
            if(i===index-1){
                prevNode=currentNode;
            }
        }
        value=currentNode.value;
        prevNode.next = currentNode.next;
        return value;
    }

    pop(){
        this.remove(this.length-1);
    }


}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.insert(0,8);
myLinkedList.pop();
// console.log(myLinkedList.printList());

class DoublyLinkedList{
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev:null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {

        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev=this.tail;
        this.tail.next = newNode;
        this.tail=newNode;

        this.length++;
        return this;
    }

    printList(){
        const arr=[];
        let currentCode= this.head;
        while(currentCode !== null){
            arr.push(currentCode.value);
            currentCode = currentCode.next;
        }
        return arr;
    }

    prepend(value){
        const newNode = {
            value: value,
            next: this.head,
            prev:null
        }
        this.head.prev=newNode;
        this.head =newNode;
        this.length++;
        return this;
    }

    insert(index,value){
        if(index===0){
            this.prepend(value);
            return;
        }

        if(index>=this.length){
            this.append(value);
            return;
        }
        let prevNode=this.head;
        for(let i=0;i<index-1;i++){ //2
            prevNode=prevNode.next;
        }
        prevNode.next={
            value: value,
            next: prevNode.next,
            prev:prevNode
        };
    }

    remove(index){
        let currentNode= this.head;
        let prevNode;let value;
        for(let i=1;i<=index;i++){ //2
            currentNode=currentNode.next;
            if(i===index-1){
                prevNode=currentNode;
            }
        }
        value=currentNode.value;
        prevNode.next = currentNode.next;
        currentNode.next.prev = prevNode;
        return value;
    }




}

let myDoubleLinkedList = new DoublyLinkedList(10);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(2);
myDoubleLinkedList.append(8);
myDoubleLinkedList.insert(2,3);
myDoubleLinkedList.remove(3);
console.log(myDoubleLinkedList.printList());
