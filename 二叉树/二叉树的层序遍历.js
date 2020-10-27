var levelTraversal = function(root) {
    let queue = [], res=[];
    if(!root) return res;
    queue.push(root);
    while(queue.length){
        const first = queue.shift();
        res.push(first.val)
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }
    return res
};