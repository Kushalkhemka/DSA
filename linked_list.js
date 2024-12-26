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
        let prevNode=this.head;
        for(let i=0;i<index-1;i++){ //2
            prevNode=prevNode.next;
        }
        prevNode.next={
            value: value,
            next: prevNode.next
        };
    }


}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.insert(2,8);
console.log(myLinkedList.printList());


