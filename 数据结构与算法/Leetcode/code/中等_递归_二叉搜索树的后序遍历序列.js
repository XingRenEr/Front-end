var verifyPostorder = function(postorder) {
    var recur = function(l, r) {
        if (l >= r) return true;
        var tempL, tempR;
        for (tempL = l; postorder[tempL] < postorder[r]; tempL++) ; // 依据"二叉搜索树左侧节点值小于根节点"找到根节点的位置
        for (tempR = r - 1; postorder[tempR] > postorder[r]; tempR--) ; // 依据"二叉搜索树右侧节点值大于根节点"找到根节点的位置
        if (tempL - 1 != tempR) return false;
        return recur(l, tempR) && recur(tempL, r - 1);
    }
    return postorder.length ? recur(0, postorder.length - 1) : true;
};
