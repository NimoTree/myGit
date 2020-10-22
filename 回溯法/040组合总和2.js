//https://leetcode-cn.com/problems/combination-sum-ii/
//组合总和|| leetcode-40
var combinationSum2 = function(candidates, target) {
    let res = [] ,len = candidates.length;
    candidates.sort((a,b) => a-b);
    function helper(i,tempSum,temp){
        if(tempSum >= target){
            if(tempSum == target){
                res.push(temp.slice());
                return
            }
            return
        }
        
        for(let j = i;j<len;j++){
            if(candidates[j-1] == candidates[j] && (j-1) >= i){
                continue
            }
            temp.push(candidates[j]);
            helper(j+1,tempSum+candidates[j],temp);
            temp.pop();
        }
    }
    helper(0,0,[])
    return res
};
