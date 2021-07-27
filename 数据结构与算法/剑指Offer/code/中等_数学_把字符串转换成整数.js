var strToInt = function(str) {
    str = str.trim();
    if (!str) return 0;
    let res = 0, sign = 1, i = 1;
    const [minInt, maxInt, boundary] = [-(2 ** 31), 2 ** 31 - 1, Math.floor(2 ** 32 / 10)];
    if (str[0] == '-') sign = -1;
    else if (str[0] != '+') i = 0;
    for (; i < str.length; i++) {
        if (!(str[i] >= '0' && str[i] <= '9')) break;
        debugger;
        if (res > boundary || (res == boundary && str[i] > '7')) return sign > 0 ? maxInt : minInt;
        res = 10 * res + (str[i] - '0');
    }
    return sign * res;
};
strToInt("2147483648");