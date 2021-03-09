// 反着的中序遍历
var kthLargest = function(root, k) {
  var max = 0;
  var inorderTraversal = function(root) {
    if (!root) return;
    inorderTraversal(root.right);
    if (!k) return; // 若 k 为零，已找到，不需要继续遍历，提前返回
    if (!--k) {
      max = root.val;
      return;
    }
    inorderTraversal(root.left);
  }
  inorderTraversal(root);
  return max;
};

/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var arr = [3,1,4,null,2], k = 1;
var objArr = arr.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];

console.log(kthLargest(A, k));