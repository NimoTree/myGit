// https://leetcode-cn.com/problems/subsets/
// 子集 leetcode-78
//给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//说明：解集不能包含重复的子集。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    for(let item1 of nums){
        for(let item2 of res){
            res = res + [[i] + item2]
        }
    }
    return res
};