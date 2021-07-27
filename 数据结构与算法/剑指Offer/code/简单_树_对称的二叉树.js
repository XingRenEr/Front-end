var isSymmetric = function(root) {
  var dfs = function(root1, root2) {
    // 返回 -1 (即不对称的情况) ：
    // 1. 左右子树根节点一个存在另一个不存在
    // 2. 左右子树根节点都存在，但是不相等
    if ((!root1 || root1.val == null) && (!root2 || root2.val == null)) {
      return;
    } else if ((!root1 || root1.val == null) && root2 && root2.val != null) {
      return -1;
    } else if ((!root2 || root2.val == null) && root1 && root1.val != null) {
      return -1;
    } else if (root1.val != root2.val) return -1;
    var res1 = dfs(root1.left, root2.right);
    var res2 = dfs(root1.right, root2.left);
    if (res1 == -1 || res2 == -1) return -1;
  }
  return root ? dfs(root.left, root.right) != -1 : true;
};

/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var root = [1, 2, 2, null, 3, null, 3];
var objArr = root.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];

console.log(isSymmetric(A));
