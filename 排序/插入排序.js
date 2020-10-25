//插入排序
//从数组的第二个元素开始，将其与左边的元素比较
// 若比左边元素小，该元素的所有左边元素向后挪一位
// 插入当前元素
function insertSort(arr){
    for(let i = 0;i<arr.length;i++){
        let temp = arr[i];
        let tempIndex = i
        while(j>0 && arr[j-1]>temp){
            arr[j]=arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr
}