//https://leetcode-cn.com/problems/merge-intervals
// 合并所有重叠的区间 leetcode-56
//酷家乐笔试题
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    const arr = intervals, res = [];
    //特殊情况判断
    if(arr.length == 0){
        return res
    };
    ////1、以头元素排序
    arr.sort((a,b) => {
        return a[0]-b[0]
    })
    //2、比较
    res.push(arr[0]);
    for(let i = 1; i < arr.length;i++){
        if(arr[i][0] <= res[res.length-1][1] ){
            res[res.length-1][1] = Math.max(arr[i][1],res[res.length-1][1])
        }else {
            res.push(arr[i])
        }
    }
    return res
};