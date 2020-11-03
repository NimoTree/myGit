//https://leetcode-cn.com/problems/intersection-of-two-arrays/
//349 两个数组的交集 leetcode-349

//方法一  去重后比较两个数组
var intersection = function(nums1, nums2) {
    let arr1= removeRepeat(nums1),arr2 = removeRepeat(nums2),res =[];
    function removeRepeat(arr){
        return Array.from(new Set(arr));
    };
    for(let i = 0;i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            if(arr2[j] == arr1[i]){
                res.push(arr2[j])
            }
        }
    }
    return res
};

//时间复杂度为 O(m*n)

//方法二 
