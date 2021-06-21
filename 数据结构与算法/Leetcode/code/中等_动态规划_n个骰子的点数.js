var dicesProbability = function(n) {
    var preArr = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], curArr;
    if (n == 1) return preArr;
    for (let i = 2; i <= n; i++) {
        curArr = [];
        for (let j = i - i; j <= 6 * i - i; j++) {
            for (let k = 1 - 1; k <= 6 - 1; k++) curArr[j] = (curArr[j] ? curArr[j] : 0) + (preArr[j-k] ? preArr[j-k] / 6 : 0);
        }
        preArr = curArr;
    }
    return curArr;
};
dicesProbability(2);