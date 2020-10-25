function bubbleSort(arr) {
    for(let i = 0 ;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
//复杂度：平均     最好      最坏     空间； 稳定性
//       O(n^2)   O(n)    O(n^2)     O(1)    稳定