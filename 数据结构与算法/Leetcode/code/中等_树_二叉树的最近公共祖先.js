var lowestCommonAncestor = function(root, p, q) {
  var queue = [],
    index = 0,
    pIndex = -1,
    qIndex = -1;
    queue.push(root);
  while (true) { // 层序遍历
    if (root && root.val == p) {
      pIndex = index;
      if (qIndex >= 0) break; // 若 p q 在(数组形式存储的)树中的序号都已找到，则终止循环
    }
    if (root && root.val == q) {
      qIndex = index;
      if (pIndex >= 0) break;
    }

    queue.push(root ? root.left : null);
    queue.push(root ? root.right : null);
    root = queue[++index];
  }
  while (pIndex != qIndex) {
    if (pIndex > qIndex) {
      pIndex = Math.floor((pIndex - 1) / 2);
    } else {
      qIndex = Math.floor((qIndex - 1) / 2);
    }
  }
  return queue[pIndex];
};


/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 7,
  q = 4;
var objArr = root.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G, H, I, J, K] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];
[D.left, D.right] = [H, I];
[E.left, E.right] = [J, K];

console.log(lowestCommonAncestor(A, p, q));