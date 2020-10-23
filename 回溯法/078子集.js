// https://leetcode-cn.com/problems/subsets/
// 子集 leetcode-78
//给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//说明：解集不能包含重复的子集。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//迭代
var subsets = function(nums) {
    const len = nums.length;
    var res =[],temp;
    for(let i = 0;i < (1 << len);++i){
                   temp = [];
        for(let j = 0;j<len;j++){
            if(i & (1<<j )){
                temp.push(nums[j])
            }
        }
        res.push(temp);
    }
    return res
};
//递归
//递归
var subsets = function(nums) {
    let res = [];
    const dfs = (index,list) => {
       if(index === nums.length){//指针越界
           res.push(list.slice());//当前结果加入解集
           return                 //结束当前递归
       }
       list.push(nums[index]);     //选择当前元素
        dfs(index+1,list);        //从下一层开始递归
        list.pop();                //不放入当前元素
        dfs(index+1,list);        //从下一层开始递归
   }
   dfs(0,[])
    return res
};
