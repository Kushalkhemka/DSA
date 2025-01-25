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
                }
                currentNode=currentNode.right;
            }
        }
    }
    lookup(value){
        else{
            let currentNode = this.root;
            while(currentNode){
                if(value<currentNode.value){
                    if(!currentNode.left){
                        return false;
                    }
                    currentNode = currentNode.left;
                }
                else if(value===currentNode.value){
                    return true;
                }
                else{
                    if(!currentNode.right){
                        return false;
                    }
                    currentNode=currentNode.right;
                }

            }
        }

    }
}

const tree = new BinarySearchTree();