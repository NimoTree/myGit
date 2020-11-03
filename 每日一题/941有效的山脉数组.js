https://leetcode-cn.com/problems/valid-mountain-array/
// 数组中的最长山脉    leetcode-845 
//2020-11-03
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length<3){ return false;}
    else{
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
    return max == len?true:false
    }
   
};
//方法二
var validMountainArray = function(A) {
    const N = A.length;
    let i = 0;

    // 递增扫描
    while (i + 1 < N && A[i] < A[i + 1]) {
        i++;
    }

    // 最高点不能是数组的第一个位置或最后一个位置
    if (i === 0 || i === N - 1) {
        return false;
    }

    // 递减扫描
    while (i + 1 < N && A[i] > A[i + 1]) {
        i++;
    }

    return i === N - 1;
};

