//https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
//二叉树的深度 剑指offer 55-|
var maxDepth = function(root) {
    if(!root) return 0;
    let lDepth = maxDepth(root.left),
         rDepth = maxDepth(root.right);
    return Math.max(lDepth,rDepth)+1
};