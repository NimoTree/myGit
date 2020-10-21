//酷家乐笔试题
//题目描述：给定n，计算n！的末尾 0 的个数

//方法一 时间复杂度 O(n)
// 10 = 2*5；对于阶乘情况 2出现的次数要比5多很多，所以只需要考虑5出现的次数
function solution1(num){
    let count = 0;
    for(let i = 1; i <= num;i++){
        if(i%5 === 0){
            console.log(i);
            count++;
        }
    }
    return count
}
//方法二 时间复杂度 O(log n)
//每隔5个数都会出现一次5
function solution2(num){
    let count = 0;
    while(num>0){
        count += ~~(num/5);//~是按位取反运算，~~是取反两次 在这里~~的作用是去掉小数部分
        num = num/5;
    }
    return count
}