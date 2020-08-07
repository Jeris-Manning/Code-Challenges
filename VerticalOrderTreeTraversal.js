// Given a binary tree, return the vertical order traversal of its nodes values.

// For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

// Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

// If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

// Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

// Input: [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation:
// Without loss of generality, we can assume the root node is at position (0, 0):
// Then, the node with value 9 occurs at position (-1, -1);
// The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
// The node with value 20 occurs at position (1, -1);
// The node with value 7 occurs at position (2, -2).

// Note:

// The tree will have between 1 and 1000 nodes.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    let x = 0;
    let y = 0;
    let tracker = {};
    var treeTime = function (root) {
        tracker[x] == undefined
            ? (tracker[x] = [[root.val, y]])
            : tracker[x].push([root.val, y]);

        if (root.left != undefined) {
            x--;
            y++;
            treeTime(root.left);
            x++;
            y--;
        }
        if (root.right != undefined) {
            x++;
            y++;
            treeTime(root.right);
            x--;
            y--;
        }
    };
    treeTime(root);
    let keyArray = Object.keys(tracker).sort((a, b) => a - b);
    let finalArray = [];

    for (let i = 0; i < keyArray.length; i++) {
        tracker[keyArray[i]].sort((a, b) =>
            a[1] != b[1] ? a[1] - b[1] : a[0] - b[0]
        );
        let smash = tracker[keyArray[i]].map((bloat) => bloat[0]);

        finalArray.push(smash);
    }

    return finalArray;
};
