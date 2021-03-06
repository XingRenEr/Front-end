var reversePrint = function(head) {
    var p = head;
    var pArr = [];
    while(p != null) {
        pArr.push(p);
        p = p.next;
    }
    pArr.reverse().map((value, index, arr) => {
      arr[index] = value.val;
    });
    return pArr;
};

 function ListNode(val, next) {
     this.val = val;
     this.next = next;
 }
 
 var node3 = new ListNode(2, null);
 var node2 = new ListNode(3, node3);
 var head = new ListNode(1, node2);
 
 reversePrint(head);