// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
//144.二叉树的前序遍历 leetcode-144
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
//方法一 递归
var preorderTraversal = function(root,res=[]) {
    if(!root) return res;
    res.push(root.val);
    preorderTraversal(root.left,res);
    preorderTraversal(root.right,res);
    return res
};


//迭代法
var preorderTraversal = function(root) {
    let stack = [],res = [];
   if(!root) return stack;
   stack.push(root);
   while(stack.length!=0){
       first = stack.pop();
       res.push(first.val);
       first.right && stack.push(first.right);
       first.left && stack.push(first.left);    
   }
    return res
};
