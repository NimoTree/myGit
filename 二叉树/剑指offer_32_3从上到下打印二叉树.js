//https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/submissions/
//剑指offer_32_3从上到下打印二叉树 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [],flag=1,queue =[root];
    if(!root) return res;
    while(queue.length !=0){
        let currentLevel = queue.length;
        res.push([]);
        if(flag){
            for(let i = 0;i<currentLevel;i++){
                let first = queue.shift();
                res[res.length-1].push(first.val);
                first.left && queue.push(first.left);
                first.right&& queue.push(first.right);
            }  
        }else{
            for(let i = 0;i<currentLevel;i++){
                let first = queue.shift();
                res[res.length-1].unshift(first.val);
                first.left && queue.push(first.left);
                first.right&& queue.push(first.right);
            }
        }
       flag = !flag;
    }
    return res
};