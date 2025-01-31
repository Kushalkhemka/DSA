class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // Node to be removed found

                // Case 1: No right child
                if (!currentNode.right) {
                    if (!parentNode) {
                        this.root = currentNode.left;
                    } else if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left;
                    } else {
                        parentNode.right = currentNode.left;
                    }
                }
                // Case 2: Right child with no left child
                else if (!currentNode.right.left) {
                    if (!parentNode) {
                        this.root = currentNode.right;
                    } else if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.right;
                    } else {
                        parentNode.right = currentNode.right;
                    }
                }
                // Case 3: Right child with a left child
                else {
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;

                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (!parentNode) {
                        this.root = leftmost;
                    } else if (currentNode.value < parentNode.value) {
                        parentNode.left = leftmost;
                    } else {
                        parentNode.right = leftmost;
                    }
                }
                return true;
            }
        }
        return false;
    }

    Breadth_First_Search(){
        let currentNode = this.root;
        let list = [];
        let queue = [];
        if(this.root) {
            queue.push(currentNode);
        }
        else {
            return false;
        }
        while(queue.length>0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list;
    }
    Breadth_First_Search_R(queue=[this.root],lst=[]){
        if(!queue.length){return lst;}
        let currentNode = queue.shift(); // Dequeue the first node
        lst.push(currentNode.value); // Add the current node's value to the list

        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }

        return this.Breadth_First_Search_R(queue,lst);

    }

    DFS_InOrder(){
        return traverseInOrder(this.root,[]);
    }

    DFS_PreOrder(){
        return traversePreOrder(this.root,[]);
    }

    DFS_PostOrder(){
        return traversePostOrder(this.root,[]);
    }


}
function traverseInOrder(node,list){
    // console.log(node.value);
    if(node.left){
        traverseInOrder(node.left,list);
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right,list);
    }
    return list;

}

function traversePreOrder(node,list){
    // console.log(node.value);
    list.push(node.value);
    if(node.left){
        traversePreOrder(node.left,list);
    }
    if(node.right){
        traversePreOrder(node.right,list);
    }
    return list;

}

function traversePostOrder(node,list){
    // console.log(node.value);
    if(node.left){
        traversePostOrder(node.left,list);
    }
    if(node.right){
        traversePostOrder(node.right,list);
    }
    list.push(node.value);
    return list;


}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(20)); // true
console.log(tree.lookup(99)); // false
console.log(tree.lookup(20)); // false
console.log(tree.Breadth_First_Search());
// console.log(tree.Breadth_First_Search_R());
// console.log(tree.DFS_InOrder())
// console.log(tree.DFS_PreOrder())
// console.log(tree.DFS_PostOrder())

