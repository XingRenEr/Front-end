// var movingCount = function(m, n, k) {
//     var dfs = function(i, j, si, sj) { // (i, j) 为当前坐标，si, sj 分别为当前列坐标的数位之和以及行坐标的数位之和
//         if (i >= m || j >= n || visited[i][j] || si + sj > k) return 0;
//         visited[i][j] = true;
//         return 1 + dfs(i + 1, j, (i + 1) % 10 ? si + 1 : si - 8, sj) + dfs(i, j + 1, si, (j + 1) % 10 ? sj + 1 : sj - 8);
//     }
//     var visited = new Array(m);
//     for (let i = 0; i < m; i++) {
//         visited[i] = new Array(n);
//     }
//     return dfs(0, 0, 0, 0);
// };

var movingCount = function(m, n, k) {
    var dfs = function(i, j, si, sj) { // (i, j) 为当前坐标，si, sj 分别为当前列坐标的数位之和以及行坐标的数位之和
        if (i >= m || j >= n || visited.has([i, j]) || si + sj > k) return 0;
        visited.add([i, j]);
        return 1 + dfs(i + 1, j, (i + 1) % 10 ? si + 1 : si - 8, sj) + dfs(i, j + 1, si, (j + 1) % 10 ? sj + 1 : sj - 8);
    }
    var visited = new WeakSet();
    return dfs(0, 0, 0, 0);
};