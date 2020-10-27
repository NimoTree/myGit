//https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
//1365.有多少小于当前数字的数字 leetcode-1365
//方法一 暴力求解
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let len = nums.length,res;
    res = new Array(len).fill(0);
    for(let i =  0;i<len;i++){
        let temp = nums[i];
        let j = 0;
        while(j<len){
            if(nums[j]<temp){
                res[i]++;
            }
            j++;
        }
    }
    return res
};
//方法二 利用快排
var smallerNumbersThanCurrent = function(nums,left,right) {
    //利用快排
    let len = nums.length;
    let data = new Array(len).fill(0).map(val => new Array(2).fill(0));
    for(let i = 0; i<len;i++){
        data[i][0] = nums[i];
        data[i][1] = i;
    }
    data.sort((a,b )=> a[0]-b[0]);
    
    const res = new Array(0);
    let pre = -1;
    for(let i = 0; i<len;i++ ){
        if(pre == -1 || data[i][0] !== data[i-1][0]){
            pre = i
        }
        res[data[i][1]] = pre
    }
    return res
};