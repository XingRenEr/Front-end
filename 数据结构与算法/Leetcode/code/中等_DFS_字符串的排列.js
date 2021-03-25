var permutation = function(s) {
    var c = s.split(""), res = [];
    var dfs = function (x) {
        if (x == c.length) {
            res.push(c.join(""));
            return;
        }
        let dic = new Set();
        for (let i = x; i < c.length; i++) {
            if (dic.has(c[i])) continue;
            dic.add(c[i]);
            [c[i], c[x]] = [c[x], c[i]];
            dfs(x + 1);
            [c[i], c[x]] = [c[x], c[i]];
        }
    }
    dfs(0);
    return res;
};

console.log(permutation("abc"));