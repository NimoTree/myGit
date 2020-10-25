//https://leetcode-cn.com/problems/longest-mountain-in-array/
// 数组中的最长山脉    leetcode-845 
//2020-10-25
var longestMountain = function(A) {
    let max = 0,len = A.length;i=1;
    while(i<len){
        if(A[i-1]<A[i] && A[i]>A[i+1]){
            let left = i-1;
            let lLen = 1;
            let right = i+1;
            let rLen = 1;
            max = Math.max(helper(left,lLen,right,rLen),max);
            i = i+rLen;
        };
        i++;
    }
    function helper(left,lLen,right,rLen){
        while (left > 0 && A[left-1]<A[left]){
            lLen++;
            left--;
        }
        while (right < len-1 && A[right+1] < A[right]){
            rLen++;
            right++;
        }
        return lLen+rLen+1;
    }
    return max
};