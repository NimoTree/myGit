// https://leetcode-cn.com/problems/subsets-ii/
// 子集|| leetcode-90
//给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//说明：解集不能包含重复的子集。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res =[],flag = {},len = nums.length;
    nums.sort((a,b) => a-b);
    function helper(start,temp){
        res.push(temp.slice());
        for(let i = start;i<len;i++){
            if( flag[i] || (i > 0 &&  !flag[i-1]&& nums[i-1] ==nums[i])){
                continue
            }
            flag[i] =true;
            temp.push(nums[i]);
            helper(i+1,temp);
            flag[i] =false;
            temp.pop();
        }
    }
    helper(0,[]);
    return res;
}