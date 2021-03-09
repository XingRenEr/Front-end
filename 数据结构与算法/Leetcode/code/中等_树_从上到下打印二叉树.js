var levelOrder = function(root) {
  if (!root) {
    return []
  }
  var queue = [],
    node, arr = [];
  queue.push(false);
  queue.push(root);
  while (queue.length > 0) {
    node = queue.shift();
    if (!node) {
      if (queue.length == 0) break;
      arr[arr.length] = [];
      queue.push(false);
      continue;
    }
    if (node.val != null) arr[arr.length - 1].push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
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
