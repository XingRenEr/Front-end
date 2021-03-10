var lowestCommonAncestor = function(root, p, q) {
  var queue = [root],
    node,
    index = 0,
    pIndex = -1,
    qIndex = -1;
  while (true) { // 层序遍历
    node = queue.shift();
    if (node && node.val == p) {
      pIndex = index;
      if (qIndex >= 0) break; // 若 p q 在(数组形式存储的)树中的序号都已找到，则终止循环
    }
    if (node && node.val == q) {
      qIndex = index;
      if (pIndex >= 0) break;
    }
    queue.push(node ? node.left : null);
    queue.push(node ? node.right : null);
    ++index;
  }
  queue = [root];
  while (pIndex != qIndex) {
    if (pIndex > qIndex) {
      pIndex = Math.floor((pIndex - 1) / 2);
    } else {
      qIndex = Math.floor((qIndex - 1) / 2);
    }
  }
  while (qIndex-- >= 0) { // 层序遍历
    node = queue.shift();
    queue.push(node ? node.left : null);
    queue.push(node ? node.right : null);
  }
  return node;
};


/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var root = [3,5,1,6,2,0,8,null,null,7,4],
  p = 5,
  q = 1;
var objArr = root.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G, H, I, J, K] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];
[D.left, D.right] = [H, I];
[E.left, E.right] = [J, K];

console.log(lowestCommonAncestor(A, p, q));
