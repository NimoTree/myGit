//https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/submissions/
//剑指offer_32_2从上到下打印二叉树 
var levelOrder = function(root) {
    let res = [],queue = [];
    if(!root) return res
    queue.push(root);
    while(queue.length ){
        const currentLevelSize = queue.length;
        res.push([]);
        for(let i = 0;i<currentLevelSize;i++){
            const node = queue.shift();
            res[res.length-1].push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        
    }
    return res
};