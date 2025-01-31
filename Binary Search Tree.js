class Node{
    constructor(value) {
        this.value=value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root=null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root==null){
            this.root=newNode;
        }
        else{
            let currentNode = this.root;
            while(true){
                if(value<currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else{
                    if(!currentNode.right){
                        currentNode.right=newNode;
                        return this;
                    }
                    currentNode=currentNode.right;
                }

            }
        }
    }

    lookup(value) {
        if (!this.root) return false;  // Early exit if the tree is empty
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value === currentNode.value) {
                return true;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;  // Return false if the value is not found
    }
}

const tree = new BinarySearchTree();