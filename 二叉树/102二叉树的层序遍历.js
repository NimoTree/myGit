//https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
//144.二叉树的前序遍历 leetcode-144
var levelOrder = function(root) {
    const res = [];
    if(!root) return res;
    let queue = [root];
    while(queue.length){
        const currentLevelSize = queue.length;
        res.push([]);
        for(let i = 0;i<currentLevelSize;i++){
            const node = queue.shift();
            res[res.length-1].push(node.val);
            node.left &&  queue.push(node.left);
            node.right &&  queue.push(node.right);
        }
    }
    return res
  };