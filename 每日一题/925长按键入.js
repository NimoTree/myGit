//https://leetcode-cn.com/problems/long-pressed-name/submissions/
// 925. 长按键入    leetcode-925
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    const len1 = name.length, len2 = typed.length;
    let i = 0,j = 0,temp;
    if(len2 < len1) return false;
    while(j<len2){
        if(name[i] === typed[j] && i < len1){
            i++;
            j++;
        }else if(name[i-1] === typed[j] ){
            j++;
        }else{
            return false
        }
    }
    return i == len1 &&j==len2? true:false
};