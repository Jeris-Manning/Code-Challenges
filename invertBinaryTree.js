// Invert a binary tree.

//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }

//  * @param {TreeNode} root
//  * @return {TreeNode}

var invertTree = function (root) {
    if (root == null) {
        return root;
    }

    let temp = root.left === undefined ? null : root.left;
    root.left = root.right === undefined ? null : root.right;
    root.right = temp;

    if (root.left != null) {
        invertTree(root.left);
    }
    if (root.right != null) {
        invertTree(root.right);
    }
    return root;
};

// Trivia:
// This problem was inspired by this original tweet by Max Howell:
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
