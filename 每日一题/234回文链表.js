//https://leetcode-cn.com/problems/palindrome-linked-list/
//回文链表|| leetcode-234
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack =[];
    while(head){
        stack.push(head.val);
        head = head.next;
    }
    let i = 0,j = stack.length-1;
    while(i<j){
        if(stack[i] != stack[j]){
            return false
        }
        i++;
        j--;
    }
   return true
};
