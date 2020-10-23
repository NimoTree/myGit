//https://leetcode-cn.com/problems/permutations/
//全排列 leetcode-46
var permute = function(nums) {
    let res = [],len = nums.length;
    function helper(start,count,temp){
        if(count == len){
            res.push(temp.slice());
        }
        for(let i = 0;i<len;i++){
            if(temp.indexOf(nums[i]) != -1){
                continue
            }
            temp.push(nums[i]);
            helper(i+1,count+1,temp);
            temp.pop();
        }
    }
    helper(0,0,[])
    return res
};