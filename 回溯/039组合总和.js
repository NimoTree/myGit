//https://leetcode-cn.com/problems/combination-sum/
//组合总和 leetcode-39
var combinationSum = function(candidates, target) {
    let res = [] ,len = candidates.length;
    candidates.sort((a,b) => {a-b});
    function helper(i,tempSum,temp){
        if(tempSum >= target){
            if(tempSum == target){
                res.push(temp.slice());
                return
            }
            return
        }
        for(let j = i;j<len;j++){
            temp.push(candidates[j]);
            helper(j,tempSum+candidates[j],temp);
            temp.pop();
        }
    }
    helper(0,0,[])
    return res
};