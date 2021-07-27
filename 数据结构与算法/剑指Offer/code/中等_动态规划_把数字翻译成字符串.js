var translateNum = function(num) {
    var numStr = num + '';
    if (numStr.length == 0) return 0;
    var a, b;
    a = 1;
    if (numStr.length == 1) return a;
    var numTemp = Number(numStr.substr(0, 2));
    b = (numTemp <= 25 && numTemp >= 10) ? 2 : 1;
    if (numStr.length == 2) return b;
    for (let i = 3; i <= numStr.length; i++) {
        let numTemp = Number(numStr.substr(i - 2, 2));
        let c = ((numTemp <= 25 && numTemp >= 10) ? a : 0) + b;
        a = b;
        b = c;
    }
    return b;
};