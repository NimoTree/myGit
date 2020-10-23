//https://leetcode-cn.com/problems/permutations-ii/
//全排列|| leetcode-47
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [],len = nums.length,flag = [];
    nums.sort((a,b) => a-b);//升序排列
    function helper(temp){
        if(temp.length == len){//个数选够
            res.push(temp.slice());//加入解集
            return //结束当前递归，结束当前分支
        }
        for(let i = 0;i < len;i++){//枚举出所有选择
            if(nums[i-1] == nums[i] && (i-1) >= 0 && !flag[i-1]){//避免产生重复的排列
                continue;
            }
            if(flag[i]) {continue;}//当前数用过了，跳过
            temp.push(nums[i]);
            flag[i] = true;
            helper(temp);
            temp.pop();
            flag[i] = false;
        }
    }
    helper([]);
    return res
};
