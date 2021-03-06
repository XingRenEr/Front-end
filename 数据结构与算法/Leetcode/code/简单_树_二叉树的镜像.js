/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  swapChildren(root);
  return root;
};

function swapChildren(root) {
  if (!root || (!root.left && !root.right)) {
    return;
  } else {
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    swapChildren(root.left);
    swapChildren(root.right);
  }
}

/* 二叉树构造函数 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/* 二叉树的创建 */
var arr = [4, 2, 7, 1, 3, 6, 9];
var objArr = arr.map((item) => new TreeNode(item));
var [A, B, C, D, E, F, G] = objArr;
[A.left, A.right] = [B, C];
[B.left, B.right] = [D, E];
[C.left, C.right] = [F, G];
