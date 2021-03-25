var pathSum = function(root, target) {
  var arr = [],
    temp = [];
  var dfs = function(root, sum) {
    if (!root) return; // 递归终点
    sum += root.val;
    if (sum > target) return; // 剪枝
    temp.push(root.val);
    if (sum == target) { // 递归终点
      arr.push(Array.from(temp));
      temp.pop(); // 回溯之前，弄乱的引用类型数据(数组)要复原
      return;
    }
    if (root.left) dfs(root.left, sum);
    if (root.right) dfs(root.right, sum);
    temp.pop(); // 回溯之前，弄乱的引用类型数据(数组)要复原
    return;
  }
  dfs(root, 0);
  return arr;
};

/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
var objArr = root.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G, H, I, J, K, L, M] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];
[D.left, D.right] = [H, I];
[E.left, E.right] = [J, K];
[F.left, F.right] = [L, M];

console.log(pathSum(A, 22));
