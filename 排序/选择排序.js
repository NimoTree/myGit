// 选择排序
//每次遍历找到数组中最小的元素与待排数组的第一个元素交换
//每次确定最左边 是数组最小值
function selectSort(arr){
    for(let i = 0;i<arr.length;i++){
        let min = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
    }
    return arr
}
//复杂度：平均     最好      最坏     空间； 稳定性
//       O(n^2)   O(n^2)    O(n^2)   O(1)  不稳定