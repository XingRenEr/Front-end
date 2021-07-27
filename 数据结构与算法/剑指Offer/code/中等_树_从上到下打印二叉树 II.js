// 方法一：超市隔板思路
/* var levelOrder = function(root) {
  if (!root) return []; // 特例处理
  var queue = [], arr = [], node;
  queue.push(false); // 隔板
  queue.push(root);
  while (queue.length > 0) {
    node = queue.shift();
    if (!node) {
      if (queue.length == 0) break; // 如果是队列中的最后一个隔板，则不再给 arr 增加行
      arr[arr.length] = []; // 给 arr 增加行
      queue.push(false); // 从队列中取出一个隔板，则新增一个隔板
      continue;
    }
    if (node.val != null) arr[arr.length - 1].push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return arr;
}; */

// 方法二：循环嵌套。内层循环次数为当前层节点数（即队列 queue 长度），用临时数组暂存当前层节点的值
var levelOrder = function(root) {
  if (!root) return []; // 特例处理
  var queue = [],
    arr = [],
    node;
  queue.push(root);
  while (queue.length) {
    var tmp = [], qLength = queue.length; // 用一个临时数组暂存一层的节点的值
    for (let i = 0; i < qLength; i++) {
      node = queue.shift();
      if (node.val != null) tmp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    arr.push(tmp);
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
