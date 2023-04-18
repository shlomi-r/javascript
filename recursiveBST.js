//Recursive Binary-Search-Tree

/*
Since the search may proceed till some leaf node, 
the running time complexity of BST search is O(h) 
where h is the height of the tree. 
However, the worst case for BST search is O(n) 
where n is the total number of nodes in the BST, 
because an unbalanced BST may degenerate to a linked list. 
However, if the BST is height-balanced the height is O(log n)
*/

function recursiveBST(x, key){
    if (x == null || key === x.key)
    return x;

    if(key < x.key)
        return recursiveBST(x.left, key);
    else
        return recursiveBST(x.right, key);
}
