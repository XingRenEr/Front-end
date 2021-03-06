// 方法一：哈希表
/* var firstUniqChar = function(s) {
    var countObj = {};
    for (let i = 0; i < s.length; i++) {
        countObj[s[i]] = countObj[s[i]] >= 0 ? countObj[s[i]] + 1 : 1;
    }
    for (let prop in countObj) {
        if (countObj[prop] == 1) {
            return prop;
        }
    }
    return " ";
}; */

// 方法二：代码更简单，空间占用更小
var firstUniqChar = function(s) {
  for (let x of s) {
    if (s.indexOf(x) === s.lastIndexOf(x)) return x;
  }
  return ' ';
};
