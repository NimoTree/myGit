// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
//129.求根到叶子节点数字之和 leetcode-129
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    function dfs(node,prev){
        if(node === null) return 0;
        const sum = prev*10 + node.val;
        if(node.left == null && node.right == null){
            return sum
        }else{
            return dfs(node.left, sum) + dfs(node.right,sum);
        }
    }
    return dfs(root,0);
};


