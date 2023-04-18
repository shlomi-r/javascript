//Recursive Binary-Search-Tree

/*
Algorithm	Average	    Worst case
Space		O(n)	    O(n)
Search		O(log n)	O(n)
Insert		O(log n)	O(n)
Delete		O(log n)	O(n)


Since the search may proceed till some leaf node, 
the running time complexity of BST search is O(h) 
where h is the height of the tree. 
However, the worst case for BST search is O(n) 
where n is the total number of nodes in the BST, 
because an unbalanced BST may degenerate to a linked list. 
However, if the BST is height-balanced the height is O(log n)
*/
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);

        if (this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode){
        if(newNode.data < node.data) {
            if(node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        }else{
            if(node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);           
        }
    }

    iterativeBST(node, key){
        while (node != null || key !== node.data){
            if(key < node.key)
                node = node.left;
            else
                node = node.right; 
        }
        return node;
    }

    recursiveBST(node, key){
        if (node == null || key === node.key)
        return node;

        if(key < node.key)
            return recursiveBST(node.left, key);
        else
            return recursiveBST(node.right, key);
    }

    max(node){
        while(node != null) node = node.right;
        return node;
    }
    min(node){
        while(node != null) node = node.left;
        return node;
    }
};

const t = new Tree();
t.insert(8);
t.insert(3);
t.insert(10);
t.insert(1);
t.insert(6);
t.insert(14);

console.log(t);
console.log(t.iterativeBST(t.root, 3));
