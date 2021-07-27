var buildTree = function(preorder, inorder) {
    var dfs = function(preL, preR, inL, inR) {
        if (preL > preR) return null;
        if (preL == preR) return new TreeNode(preorder[preL]);
        var node = new TreeNode(preorder[preL]);
        var leftLen = inorder.indexOf(preorder[preL]) - inL;
        node.left = dfs(preL + 1, preL + leftLen, inL, inL + leftLen - 1);
        node.right = leftLen + 1 == preorder.length ? null : dfs(preL + leftLen + 1, preR, inL + leftLen + 1, inR);
        return node;
    }
    return dfs(0, preorder.length - 1, 0, inorder.length - 1);
};

var preorder = [3,9,20,15,7];
var inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder));