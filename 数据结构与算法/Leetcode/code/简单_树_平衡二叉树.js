var isBalanced = function(root) {
  var balanceFlag = true;
  var dfs = function(root) {
    if (!balanceFlag) return;
    if (!root || root.val == null) return 0; // !root.val 会把 root.val 为 null 和 0 的都包括
    var lson = dfs(root.left),
      rson = dfs(root.right);
    if (Math.abs(lson - rson) > 1) {
      balanceFlag = false;
      return;
    }
    return Math.max(lson, rson) + 1;
  }
  dfs(root);
  return balanceFlag;
};

/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var root = [2, 1, 3, 0, 7, 9, 1, 2, null, 1, 0, null, null, 8, 8, null, null, null, null, 7];
var objArr = root.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];
[D.left, D.right] = [H, I];
[E.left, E.right] = [J, K];
[F.left, F.right] = [L, M];
[G.left, G.right] = [N, O];
[H.left, H.right] = [P, Q];
[I.left, I.right] = [R, S];
[J.left, J.right] = [T, null];

console.log(isBalanced(A));
