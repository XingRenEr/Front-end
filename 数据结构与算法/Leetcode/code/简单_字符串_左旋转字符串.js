var reverseLeftWords = function(s, n) {
  // 方法一：slice
  /* return s.slice(n) + s.slice(0, n) */

  // 方法二：数组
  /* var arr = s.split('');
  for (var i = 0; i < n; i++) {
      arr.push(arr.shift());
  }
  return arr.join('') */
};
reverseLeftWords('abcdefg', 2);
