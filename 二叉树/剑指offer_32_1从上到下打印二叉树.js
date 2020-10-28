//https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
//剑指offer_32_2从上到下打印二叉树 
var levelOrder = function(root) {
    let res =[];
    if(!root) return res;
    let queue = [root];
    while(queue.length){
        const first = queue.shift();
        res.push(first.val);
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }
    return res
}