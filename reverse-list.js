//Reverse a singly linked list.
//A linked list can be reversed either iteratively or recursively. Could you implement both?

// recursive
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
    
};
// non-recursive
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    
    
    var prev = head;
    var cur = head.next;
      
    prev.next = null;
    while (cur !== null) {
        var next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;
    
