//https://leetcode-cn.com/problems/implement-strstr/
// 实现strStr leetcode-28
function strStr(haystack,needle){
    let len1 = haystack.length, len2 = needle.length;
    for(var i = 0;i<= len1 - len2; i++){
        for(var j = 0; j < len2;j++) {
            if(haystack[i+j] !== needle[j] ){
                break;
            }
        }
        if(len2 === j){
            return i;
        }
    }
    return -1;
}
const str1 = "hello", str2 = "ll"
console.log(strStr(str1,str2))