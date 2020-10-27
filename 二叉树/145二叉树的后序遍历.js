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
 * @return {number[]}
 */
//递归法
var postorderTraversal = function(root,res=[]) {
    if(!root) return res;
    root.left && postorderTraversal(root.left,res);
    root.right && postorderTraversal(root.right,res);
    res.push(root.val);
    return res
};


//迭代法
var postorderTraversal = function(root) {
    let res = [], stack = [];
    let prev = null;
    while(root != null || stack.length != 0){
        while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            if (root.right == null || root.right == prev) {
                res.push(root.val);
                prev = root;
                root = null;
            } else {
                stack.push(root);
                root = root.right;
            }
        }
        return res;
};