var exist = function(board, word) {
    var dfs = function(i, j, k) {
        if(!(i >= 0 && i < board.length) || !(j >= 0 && j < board[0].length) || board[i][j] != word[k]) return false;
        if (k == word.length - 1) return true;
        board[i][j] = "";
        var res = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        board[i][j] = word[k];
        return res;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};
