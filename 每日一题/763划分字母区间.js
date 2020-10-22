//https://leetcode-cn.com/problems/partition-labels/
// 划分字母区间    leetcode-763


/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const len = S.length;
    let i = 0,j,res =[],num=[];
    while(i<len){
        let indexLast = S.lastIndexOf(S[i]);
        if(i !== indexLast){
            for(let j = i+1; j<indexLast;j++){
                if(S.lastIndexOf(S[j]) <indexLast){
                    continue
                }else{
                    indexLast = S.lastIndexOf(S[j])
                }
            }
            res.push(S.split("").slice(i,indexLast+1).join(''));
        }else{
            res.push(S[i]);
        }
        i =indexLast+1;
    }
    for(let i =0 ;i <res.length;i++){
        num[i] = res[i].length;
    }
    return  num
};