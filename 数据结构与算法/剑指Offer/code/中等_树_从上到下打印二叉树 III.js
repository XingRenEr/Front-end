var levelOrder = function(root) {
    if (!root) return [];
    var queue = [root], arr = [], isOdd = true;
    while (queue.length) {
        let qLength = queue.length, temp = [];
        for (let i = 0; i < qLength; i++) {
            let node = queue.shift();
            isOdd ? temp.push(node.val) : temp.unshift(node.val);
            if (node.left != null && node.left.val != null) queue.push(node.left);
            if (node.right != null && node.right.val != null) queue.push(node.right);
        }
        arr.push(temp);
        isOdd = !isOdd;
    }
    return arr;
};

/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var root = [3, 9, 20, null, null, 15, 7];
var objArr = root.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];

console.log(levelOrder(A));
