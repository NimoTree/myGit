function fastSort(arr,L,R){
    if(L>= R){
         return
    } 
    let pivot = arr[L];
    let i = L, j = R;
    while(i<j){
        while(i<j && arr[j]>= pivot){
            j--
        }
        arr[i] =  arr[j];
        while(i<j && arr[i] <= pivot){
            i++
        }
        arr[j] =  arr[i];
    }
    arr[i] = pivot;
    arguments.callee(arr,L,i-1);
    arguments.callee(arr,i+1,R);
}