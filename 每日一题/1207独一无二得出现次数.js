//https://leetcode-cn.com/problems/unique-number-of-occurrences/
//1207独一无二得出现次数 leetcode-1207
/**
 * @param {number[]} arr
 * @return {boolean}
 */

//借用map
var uniqueOccurrences = function(arr) {
    let len = arr.length;
    let map = new Map();
    for(let i = 0;i<len ;i++){
        let count = map[arr[i]];
        if(count){
            map[arr[i]] =  count+1;
        }else{
            map[arr[i]] = 1;
        }
    };
    let res = [];
    for(let key in map){
        res.push(map[key]);
    };
    
    for(let i = 0;i<res.length;i++){
        if(res.indexOf(res[i]) != res.lastIndexOf(res[i])){
            return false
        }
    }
    return true
};
//借用map set
//借用map
var uniqueOccurrences = function(arr) {
    let len = arr.length;
    let map = new Map();
    for(let i = 0;i<len ;i++){
        let count = map[arr[i]];
        if(count){
            map[arr[i]] =  count+1;
        }else{
            map[arr[i]] = 1;
        }
    };
    let res = [],set =new Set();
    for(let key in map){
        res.push(map[key]);
        set.add(map[key]);
    };
    
    if(Array.from(set).length!=res.length) return false
    return true
};