//https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/submissions/
// 平衡二叉树 剑指offer 55-||
var isBalanced = function(root) {
    if(!root) return true;
    return (Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1) 
    && isBalanced(root.left) && isBalanced(root.right);

    function maxDepth(root){
         if(!root) return 0;
         let lDepth = maxDepth(root.left),
         rDepth = maxDepth(root.right);
        return Math.max(lDepth,rDepth)+1;
    }
};